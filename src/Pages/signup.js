
import "./signup.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase auth
import { app } from "./firebaseConfig"; // Import your Firebase config file


const Signup = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const [success, setSuccess] = useState("");


 const handleSignup = async (e) => {
   e.preventDefault();
   const auth = getAuth(app);


   try {
     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     console.log("User created:", userCredential.user);
     setError("");
     setSuccess("Account created successfully! You can now log in.");
   } catch (err) {
     console.error(err.message);
     setError("Failed to create account. Try again.");
     setSuccess("");
   }
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
         />
       </label>
       <label>
         <h3>Create a Password:</h3>
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}
         />
       </label>
       <button
         type="submit"
         style={{
           marginTop: "20px",
           marginBottom: "30px",
           boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
           border: "1px solid black",
           width: "200px",
         }}
       >
         Submit
       </button>
     </form>
     {error && <p style={{ color: "red" }}>{error}</p>}
     {success && <p style={{ color: "green" }}>{success}</p>}
     <Link to="/login">
       <button
         style={{
           boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
           border: "1px solid black",
           width: "200px",
         }}
       >
         Back to Log In
       </button>
     </Link>
   </div>
 );
};


export default Signup;


