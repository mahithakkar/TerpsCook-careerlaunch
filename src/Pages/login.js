
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { IoFastFoodOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase auth
import { app } from "./firebaseConfig"; // Import your Firebase config file
import "./login.css";


const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");


 const navigate = useNavigate(); // Initialize navigate hook


 const handleLogin = async (e) => {
   e.preventDefault();
   const auth = getAuth(app);


   try {
     const userCredential = await signInWithEmailAndPassword(auth, email, password);
     console.log("User logged in:", userCredential.user);
     setError(""); // Clear any previous errors


     // Redirect to the Ingredients page
     navigate("/ingredients");
   } catch (err) {
     console.error(err.message);
     setError("Failed to log in. Please check your credentials.");
   }
 };


 return (
   <div
     className="login-container"
     style={{
       display: "block",
       boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
       backgroundColor: "rgb(255, 243, 243)",
       width: "70%",
       borderRadius: "10px",
     }}
   >
     <h1 style={{ marginTop: "90px", padding: "30px" }}>
       Welcome to TerpsCook
       <IoFastFoodOutline style={{ marginLeft: "10px" }} />
     </h1>
     <h2>Log In</h2>
     <form onSubmit={handleLogin}>
       <h3
         style={{
           textAlign: "left",
           marginLeft: "40px",
           marginRight: "20px",
           display: "inline-block",
         }}
       >
         Email
       </h3>
       <input
         style={{ display: "inline-flex", width: "305px" }}
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
       />
       <p>{'\n'}</p>
       <h3
         style={{
           textAlign: "left",
           marginRight: "20px",
           display: "inline-block",
         }}
       >
         Password
       </h3>
       <input
         style={{ display: "inline-flex", width: "305px" }}
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
       />
       <p>{'\n'}</p>
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
         Log In
       </button>
       <Link to="/signup">
         <button
           style={{
             boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
             border: "1px solid black",
             width: "200px",
           }}
         >
           New? Sign Up
         </button>
       </Link>
     </form>
     {error && <p style={{ color: "red" }}>{error}</p>}
     <Link to="/aboutme">
       <div className="Buttons" style={{ display: "inline-flex" }}>
         <button
           style={{
             boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
             border: "1px solid black",
             width: "415px",
             marginBottom: "30px",
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


export default Login;


