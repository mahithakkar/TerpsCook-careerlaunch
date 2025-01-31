// src/Pages/ingredients.js
import React, { useEffect, useState } from "react";
import "./Ingredients.css"; // keep your styles
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaStar, FaHome, FaInfoCircle } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, addDoc } from "firebase/firestore";

import { recipesData } from "./recipesData";

const Ingredients = () => {
  const [dietRestriction, setDietRestriction] = useState("None");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchDietAndRecipes = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          console.log("No user logged in");
          return;
        }

        const db = getFirestore();
        const userRef = doc(db, "users", user.uid);
        const snapshot = await getDoc(userRef);

        if (snapshot.exists()) {
          const data = snapshot.data();
          const userDiet = data.dietaryRestriction || "None";
          setDietRestriction(userDiet);

          let key = "none";
          if (userDiet.toLowerCase() === "vegetarian") key = "vegetarian";
          else if (userDiet.toLowerCase() === "vegan") key = "vegan";
          else if (userDiet.toLowerCase() === "gluten-free") key = "glutenFree";
          else if (userDiet.toLowerCase() === "dairy-free") key = "dairyFree";

          const chosenRecipes = recipesData[key] || [];
          setRecipes(chosenRecipes);
        } else {
          console.log("User doc not found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchDietAndRecipes();
  }, []);

  const handleSaveRecipe = async (recipe) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        alert("No user logged in");
        return;
      }
      const db = getFirestore();
      await addDoc(collection(db, "users", user.uid, "savedRecipes"), {
        title: recipe.title,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
      });
      alert("Recipe saved!");
    } catch (error) {
      console.error("Error saving recipe:", error);
      alert("Failed to save recipe. " + error.message);
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "block",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgb(255, 243, 243)",
        width: "70%",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ marginTop: "60px", padding: "30px" }}>
        TerpsCook <IoFastFoodOutline style={{ marginLeft: "10px" }} />
      </h1>

      <h2>Your Dietary Restriction: {dietRestriction}</h2>
      <h3 style={{ marginTop: "20px" }}>Here are some recipes you might enjoy:</h3>

      {recipes.length === 0 ? (
        <p>No recipes found for this restriction.</p>
      ) : (
        recipes.map((recipe, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              margin: "20px auto",
              width: "80%",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{recipe.title}</h3>
            <h4>Ingredients:</h4>
            <ul style={{ textAlign: "left" }}>
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <h4>Instructions:</h4>
            <ol style={{ textAlign: "left" }}>
              {recipe.instructions.map((step, s) => (
                <li key={s}>{step}</li>
              ))}
            </ol>
            <div className="Submit">
              <button
                onClick={() => handleSaveRecipe(recipe)}
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                  border: "1px solid black",
                  marginTop: "10px",
                  fontSize: "17px",
                  height: "40px",
                  width: "200px",
                  backgroundColor: "lightgreen",
                  borderRadius: "3px",
                }}
              >
                Save This Recipe
              </button>
            </div>
          </div>
        ))
      )}

      {/* Navigation Buttons */}
      <Link to="/savedrecipes">
        <div className="Buttons" style={{ display: "inline-flex" }}>
          <button
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
              border: "1px solid black",
              marginTop: "100px",
              marginBottom: "30px",
              width: "200px",
            }}
          >
            <FaStar size={20} />
            <br />
            Saved Recipes
          </button>
        </div>
      </Link>
      <Link to="/">
        <div className="Buttons" style={{ display: "inline-flex" }}>
          <button
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
              border: "1px solid black",
              width: "200px",
            }}
          >
            <FaHome size={20} />
            <br />
            Back to Login
          </button>
        </div>
      </Link>
      <Link to="/aboutme">
        <div className="Buttons" style={{ display: "inline-flex" }}>
          <button
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
              border: "1px solid black",
              width: "200px",
            }}
          >
            <FaInfoCircle size={20} />
            <br />
            Info
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Ingredients;
