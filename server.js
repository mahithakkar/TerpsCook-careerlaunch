const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure OpenAI API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Use environment variable
});
const openai = new OpenAIApi(configuration);

// API endpoint
app.post("/api/generate-recipe", async (req, res) => {
    const { mealType, ingredients } = req.body;

    if (!mealType || !ingredients) {
        return res.status(400).json({ error: "Meal type and ingredients are required." });
    }

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Generate a ${mealType} recipe using these ingredients: ${ingredients.join(", ")}.`,
            max_tokens: 200,
            temperature: 0.7,
        });

        const recipe = response.data.choices[0].text.trim();
        res.json({ recipe });
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        res.status(500).json({ error: "Error generating recipe." });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
