// src/Pages/savedrecipes.js
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./savedrecipes.css";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const SavedRecipes = () => {
  const [saved, setSaved] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          setError("No user is logged in.");
          return;
        }

        const db = getFirestore();
        const savedRef = collection(db, "users", user.uid, "savedRecipes");
        const snapshot = await getDocs(savedRef);

        const allSaved = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSaved(allSaved);
      } catch (err) {
        console.error("Error fetching saved recipes:", err);
        setError("Failed to fetch saved recipes.");
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div
      className="saved-container"
      style={{
        display: "block",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgb(255, 243, 243)",
        width: "70%",
        borderRadius: "10px",
        margin: "auto",
      }}
    >
      <h1 style={{ marginTop: "60px", padding: "30px" }}>Saved Recipes:</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {saved.length === 0 ? (
        <p>No saved recipes yet.</p>
      ) : (
        saved.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              margin: "20px auto",
              width: "80%",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <h3>{recipe.title}</h3>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients?.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <h4>Instructions:</h4>
            <ol>
              {recipe.instructions?.map((step, s) => (
                <li key={s}>{step}</li>
              ))}
            </ol>
          </div>
        ))
      )}

      {/* Buttons: Home/Info */}
      <Link to="/ingredients">
        <div className="Buttons" style={{ display: "inline-flex" }}>
          <button
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
              border: "1px solid black",
              width: "200px",
              marginBottom: "30px",
            }}
          >
            <FaHome size={20} />
            <br />
            Home
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

export default SavedRecipes;
