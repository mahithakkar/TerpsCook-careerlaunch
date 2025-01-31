import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { IoFastFoodOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
import { app } from "./firebaseConfig"; 
import "./login.css";


const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const navigate = useNavigate(); 


 const handleLogin = async (e) => {
   e.preventDefault();
   const auth = getAuth(app);
   try {
     const userCredential = await signInWithEmailAndPassword(auth, email, password);
     console.log("User logged in:", userCredential.user);
     setError(""); 
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
     <h1 style={{marginTop: "90px",
       paddingTop: "30px",
       textShadow: '2px 2px 0px #FFFFFF, 5px 4px 0px rgba(255, 0, 93, 0.15)',
       fontWeight: "bold",
       fontSize: "40px",
       fontFamily: 'Helvetica',
       }}>
       TerpsCook
       <IoFastFoodOutline style={{ marginLeft: "10px" }} />
     </h1>
     <h2 style = {{fontSize: '30px', 
     fontWeight: 'bold', 
      color: 'rgb(0, 153, 255)',
    fontFamily: 'Helvetica',
    }}
     
     
     >Log In</h2>
     <form onSubmit={handleLogin}>
       <h3
         style={{
           fontFamily: 'Arial',
           textAlign: "left",
           marginLeft: "40px",
           marginRight: "20px",
           display: "inline-block",
           fontFamily: 'Helvetica',
         }}
       >
         Email:
       </h3>
       <input
         style={{ display: "inline-flex", width: "290px" }}
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
           fontFamily: 'Helvetica',
         }}
       >
         Password:
       </h3>
       <input
         style={{ display: "inline-flex", width: "290px" }}
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
           fontFamily: 'Helvetica',
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
             fontWeight: "bold",
             marginLeft: '13px',
             fontFamily: 'Helvetica',
             backgroundImage: 'linear-gradient(to right,rgb(165, 233, 239),rgb(105, 198, 255))',
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
             fontFamily: 'Helvetica',
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