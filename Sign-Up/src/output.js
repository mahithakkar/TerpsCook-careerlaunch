import React from "react";
import "./output.css";
import {useState} from 'react';


const output = () => {
   //const [recipes, setRecipes] = useState('');
   return (
       <div className = "output-container">
           <h1>Recipe(s)</h1>
           <button>Save this recipe</button>
           <button>Generate new recipe</button>
       </div>
   )
}
export default login;