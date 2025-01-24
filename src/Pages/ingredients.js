import React, { useState } from 'react';
import Select from 'react-select';
import { ingredientslist } from './IngredientList';
import './Ingredients.css';
import { FaStar, FaHome, FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { IoFastFoodOutline } from "react-icons/io5";
import './App.css';
import axios from "axios";


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
   if (!mealType || selectedIngredients.length === 0) {
     alert("Please select a meal type and at least one ingredient.");
     return;
   }
    const ingredients = selectedIngredients.map(item => item.value);
    try {
     const response = await axios.post("http://localhost:3001/api/generate-recipe", {
       mealType: mealType.label,
       ingredients,
     });
      const recipe = response.data.recipe;
     console.log("Generated Recipe:", recipe);
     alert(`Recipe Generated: \n${recipe}`);
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