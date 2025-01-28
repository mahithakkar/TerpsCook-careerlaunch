import React, { useState } from 'react';
import Select from 'react-select';
import { ingredientslist } from './IngredientList';
import './Ingredients.css';
import { FaStar, FaHome, FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { IoFastFoodOutline } from "react-icons/io5";
import './App.css';
//import axios from "axios";

import { Configuration, OpenAIApi } from "azure-openai";

const openai = new OpenAIApi(
    new Configuration({
        azure: {
            apiKey: "LuKShaWecRt6LY6vR3o5x66fZcL5NWkAzrHxJ9zejA5Xfc1aL2HQJQQJ99BAACHYHv6XJ3w3AAAAACOGrjIV", 
            endpoint: "https://msavy-m6b2x8as-eastus2.openai.azure.com/",
            deploymentName: "gpt-4",
        }
    }),
);

/*
import os  
import base64
from openai import AzureOpenAI  

endpoint = os.getenv("ENDPOINT_URL", "https://msavy-m6b2x8as-eastus2.openai.azure.com/")  
deployment = os.getenv("DEPLOYMENT_NAME", "gpt-4")  
subscription_key = os.getenv("AZURE_OPENAI_API_KEY", "LuKShaWecRt6LY6vR3o5x66fZcL5NWkAzrHxJ9zejA5Xfc1aL2HQJQQJ99BAACHYHv6XJ3w3AAAAACOGrjIV")  

# Initialize Azure OpenAI Service client with key-based authentication    
client = AzureOpenAI(  
    azure_endpoint=endpoint,  
    api_key=subscription_key,  
    api_version="2024-05-01-preview",
)
*/

const Ingredients = () => {
 const [mealType, setMealType] = useState(null); // Meal type state
 const [selectedIngredients, setSelectedIngredients] = useState([]); // Ingredients state
 const [recipe, setRecipe] = useState(""); // Store generated recipe


 const navigate = useNavigate();


 // Meal type options
 const mealOptions = [
   { value: 'breakfast', label: 'Breakfast' },
   { value: 'lunch', label: 'Lunch' },
   { value: 'dinner', label: 'Dinner' },
   { value: 'dessert', label: 'Dessert' }
 ];


 // Function to handle recipe generation
 const handleGenerateRecipe = async () => {
  console.log("test");
   if (!mealType || selectedIngredients.length === 0) {
     alert("Please select a meal type and at least one ingredient.");
     return;
   }
    const ingredients = selectedIngredients.map(item => item.value);
    const prompt = `Generate a recipe for a ${mealType.label} using the following ingredients: ${ingredients.join(", ")}`;
    console.log("Generated prompt:", prompt);
    try {
     // Make the request to Azure OpenAI API
     const response = await openai.createChatCompletion({
      model: '2024-05-01-preview',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `Generate a recipe based on the following ingredients: ${selectedIngredients.join(', ')}.` },
      ],
    });
     /*
     const response = await openai.createCompletion({
      model: "gpt-4",
      prompt: prompt,
      max_tokens: 300, // Adjust based on your desired output length
      temperature: 0.7,
    });*/
    const recipe = response.data.choices[0].text.trim();
    console.log("Generated Recipe:", recipe);
    // Navigate to the Output page with the generated recipe
    navigate("/output", { state: { recipe } });
   } catch (error) {
     console.error("Error generating recipe:", error);
     alert("Failed to generate a recipe. Please try again.");
   }
 };
 
 


 return (
   <div className="App" style={{ display: 'block', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgb(255, 243, 243)', width: '70%', borderRadius: '10px' }}>
     <h1 style={{ marginTop: '60px', padding: '30px' }}>TerpsCook<IoFastFoodOutline style={{ marginLeft: '10px' }} /></h1>


     {/* Meal selection */}
     <h2 style={{ marginTop: '20px' }}>What kind of meal would you like to make?</h2>
     <div className="Select">
       <Select
         options={mealOptions}
         onChange={setMealType}
       />
     </div>


     {/* Ingredient selection */}
     <h2>What ingredients do you have? Write/Choose! </h2>
     <div className="Select">
       <Select
         isMulti
         onChange={setSelectedIngredients}
         options={ingredientslist}
         className="basic-multi-select"
         classNamePrefix="Select"
       />
     </div>


     {/* Generate Recipe Button */}
     <div className="Submit">
       <button
         onClick={handleGenerateRecipe}
         style={{
           boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
           border: '1px solid black',
           marginTop: '10px',
           fontSize: '17px',
           height: '40px',
           width: '400px',
           backgroundColor: 'lightgreen',
           borderRadius: '3px',
         }}
       >
         Generate New Recipe
       </button>
     </div>


     {/* Navigation Buttons */}
     <Link to="/savedrecipes">
       <div className="Buttons" style={{ display: 'inline-flex' }}>
         <button style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black', marginTop: '100px', marginBottom: '30px', width: '200px' }}>
           <FaStar size={20} /><br />Saved Recipes
         </button>
       </div>
     </Link>
     <Link to="/">
       <div className="Buttons" style={{ display: 'inline-flex' }}>
         <button style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black', width: '200px' }}>
           <FaHome size={20} /><br />Back to Login
         </button>
       </div>
     </Link>
     <Link to="/aboutme">
       <div className="Buttons" style={{ display: 'inline-flex' }}>
         <button style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black', width: '200px' }}>
           <FaInfoCircle size={20} /><br />Info
         </button>
       </div>
     </Link>
   </div>
 );
};


export default Ingredients;