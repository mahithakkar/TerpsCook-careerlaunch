import React, { useState } from 'react';
import Select from 'react-select';
import {ingredientslist} from './IngredientList';
import './App.css';
import { FaStar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";



let nextId = 0;
export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [chosen, setChosen] = useState([]);

  const mealOptions = [
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
    { value: 'dessert', label: 'Dessert' }
  ]
  
  return (
    <div className="App">
      {/* Asks user for meal */}
      <div className="Question">
      <h2>What kind of meal would you like to make?</h2>
      </div>
      <div className="Select">
      <Select options={mealOptions} />
      </div>

      {/* Asks user for ingredients */}
      <div className="Question">
      <h2>What ingredients do you have?</h2>
      </div>      
      <div className="Select">
      <Select
        defaultValue={selectedOption}
        isMulti
        onChange={setSelectedOption}
        options={ingredientslist}
        className="basic-multi-select"
        classNamePrefix="Select"
      />
      </div>
              <div className="Submit">
              <button style={{ fontSize: '17px', height: '30px', width: '1122px', backgroundColor: 'lightblue', borderWidth: '1px', borderRadius: '3px'}}>Submit </button> 
              </div>
      <div className="Buttons">
      <button style={{height: '50px', marginTop: '100px',  width: '374px'}}><FaStar size={20}/><br />Saved Recipes </button> 
      <button style={{height: '50px', marginTop: '100px',  width: '374px'}}><FaHome size={20}/><br />Home</button>  
      <button style={{height: '50px', marginTop: '100px', width: '374px'  }}><FaInfoCircle size={20}/><br />Info</button>  
      </div>

      </div>

  );
}