/**********************************************************
 * server.js 
 * Endpoint: https://savyamiriyalaaoai.openai.azure.com/
 * Key #2:   6vpXyMV4aYMpuNTdbRpMabdkOqN7McPHzk9Uv7gqecOja...
 **********************************************************/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 1) Azure OpenAI configuration
const configuration = new Configuration({
  azure: {
    apiKey: "6vpXyMV4aYMpuNTdbRpMabdkOqN7McPHzk9Uv7gqecOjaMnzaFITJQQJ99BAACYeBjFXJ3w3AAABACOG9d",
    endpoint: "https://savyamiriyalaaoai.openai.azure.com/",
    deploymentName: "gpt-4", // Change if your deployment name is different
  },
});
const openai = new OpenAIApi(configuration);

// 2) Basic test route
app.get("/", (req, res) => {
  res.send("Server is running (savyamiriyalaaoai endpoint, Key #2)!");
});

// 3) Recipe generation route
app.post("/api/generate-recipe", async (req, res) => {
  try {
    const { mealType, ingredients, dietaryRestriction } = req.body;
    if (!mealType || !ingredients || !Array.isArray(ingredients)) {
      return res.status(400).json({ error: "mealType and ingredients are required." });
    }

    const userPrompt = `
Generate a ${mealType} recipe that meets dietary restriction: ${dietaryRestriction || "None"}.
Use these ingredients: ${ingredients.join(", ")}.
Include steps, cooking time, tips.
    `;

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful recipe assistant." },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 400,
      temperature: 0.7,
    });

    const recipeText = response.data.choices[0].message.content.trim();
    res.json({ recipe: recipeText });
  } catch (error) {
    console.error("Error generating recipe (savyamiriyalaaoai/Key #2):", error);
    res.status(500).json({ error: "Error generating recipe." });
  }
});

// 4) Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server (savyamiriyalaaoai/Key #2) running on http://localhost:${PORT}`);
});
