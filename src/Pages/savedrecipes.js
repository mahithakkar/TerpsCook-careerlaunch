import React from "react";
import "./savedrecipes.css";
import {useState} from 'react';
import { FaStar, FaHome, FaInfoCircle } from "react-icons/fa";
import {Link} from 'react-router-dom';


const Savedrecipes = () => {
   const [recipes, setRecipes] = useState('');
   return (
       <div className = "saved-container"  style={{display: 'block', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgb(255, 243, 243)', width: '70%', borderRadius: '10px'}}>
           <h1 style={{marginTop: '60px', padding: '30px'}}>Saved Recipes:</h1>
           <p>{'  \n'}</p>
            {/*Navigation Buttons*/}
                <Link to="/ingredients">
                    <div className="Buttons" style={{display: 'inline-flex'}}>
                        <button style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black', width: '200px',  marginBottom: '30px' }}><FaHome size={20}/><br />Home</button>
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
export default Savedrecipes;