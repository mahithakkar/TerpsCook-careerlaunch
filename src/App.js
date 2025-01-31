
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Ingredients from "./Pages/ingredients";
import SavedRecipes from "./Pages/savedrecipes";
import AboutMe from "./Pages/aboutme";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/savedrecipes" element={<SavedRecipes />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
