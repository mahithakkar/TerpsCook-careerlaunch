import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./firebaseConfig";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(""); 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const auth = getAuth(app);
    const db = getFirestore(app);

    let user;
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      user = userCredential.user;
      console.log("User account created:", user.uid);
    } catch (err) {
      console.error("Error creating user in Auth:", err.message);
      setError("Failed to create account. " + err.message);
      return; 
    }

    try {
      const dietaryRestrictionToSave = selected || "None";
      await setDoc(doc(db, "users", user.uid), {
        email,
        dietaryRestriction: dietaryRestrictionToSave,
      });
      console.log("User data saved to Firestore.");
      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Error saving user data to Firestore:", err.message);
      setError("Failed to save your info. " + err.message);
    }
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div
      className="App"
      style={{
        display: "block",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgb(235, 242, 251)",
        width: "70%",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ marginTop: "60px", padding: "30px" }}>
        Sign Up
        <IoFastFoodOutline style={{ marginLeft: "10px" }} />
      </h1>
      <form onSubmit={handleSignup}>
        <label>
          <h3>Email:</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}
            required
            placeholder="example@gmail.com"

          />
        </label>
        <label>
          <h3>Create a Password:</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}
            required
            minLength={8}
            placeholder="At least 8 characters"
          />
        </label>
        <div>
          <label>
            <h3>Dietary Restriction:</h3>
          </label>
          <select
            id="dropdown"
            value={selected}
            onChange={handleChange}
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
              width: "97%",
              padding: "5px",
              borderRadius: "5px",
              
            }}
            required
          >
            <option value="">Select...</option>
            <option value="None">None</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Dairy-Free">Dairy-Free</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            marginTop: "30px",
            marginBottom: "50px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            border: "2px solid black",
            width: "200px",
            backgroundImage: 'linear-gradient(to right,rgb(165, 233, 239),rgb(105, 198, 255))',
            
          }}
        >
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default Signup;
