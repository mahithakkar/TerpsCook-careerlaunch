import "./styles.css";

import React, { useState } from "react";

const Dropdown = () => {
  const [selected, setSelected] = useState("");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <div className="Heading">
        <form>
          <label className="input">
            <h3>First Name:</h3>
            <input type="text" name="First Name" />
          </label>
          <label>
            <h3>Email:</h3>
            <input type="text" name="Email" />
          </label>
        </form>
        <div>
          <label dropdownTitle="dropdown">
            <h3>Dietary Restriction:</h3>
          </label>
          <select id="dropdown" value={selected} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="1">None</option>
            <option value="2">Vegetarian</option>
            <option value="3">Vegan</option>
            <option value="4">Gluten-Free</option>
            <option value="5">Dairy-Free</option>
          </select>
        </div>
        <form>
          <label className="input">
            <h3>Create a Password:</h3>
            <input type="password" name="Password" />
          </label>
        </form>
      </div>
      <input type="submit" value="Submit" className="submit" />
    </div>
  );
};

export default Dropdown;
