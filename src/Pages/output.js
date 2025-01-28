import React from "react";
import "./output.css";
//import {useState} from 'react';
import { FaStar, FaHome, FaInfoCircle } from "react-icons/fa";
import {Link} from 'react-router-dom';
//import { Ingredients } from './ingredients';


const Output = () => {
   //const [recipes, setRecipes] = useState('');
  /*const location = useLocation();
  const recipe = location.state?.recipe || "No recipe generated";*/
   return (
       <div className = "output-container"  style={{display: 'block', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgb(235, 242, 251)', width: '70%', borderRadius: '10px'}}>
           <h1 style={{marginTop: '60px', padding: '30px'}}>Recipes:</h1>
           <p>{recipe}</p>
           <button style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black',}}>Save this recipe</button>
           <button style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black', backgroundColor: 'lightgreen'}}>Generate new recipe</button>
           <p>{'\n'}</p>
        {/*Navigation Buttons*/}
      <Link to="/savedrecipes">  
        <div className="Buttons" style={{display: 'inline-flex', marginBottom: '30px'}}>
          <button style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black',marginTop: '100px', width: '200px'}}><FaStar size={20}/><br />Saved Recipes</button> 
        </div>
      </Link>
      <Link to="/ingredients">
        <div className="Buttons" style={{display: 'inline-flex'}}>
          <button style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black', width: '200px'}}><FaHome size={20}/><br />Home</button>
        </div>
      </Link>
      <Link to ="/aboutme">
        <div className="Buttons" style={{display: 'inline-flex'}}>
          <button style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black', width: '200px'}}><FaInfoCircle size={20}/><br />Info</button>  
        </div>
      </Link>
       </div>

   )
}
export default Output;