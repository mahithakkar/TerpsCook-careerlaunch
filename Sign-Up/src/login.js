import React from "react";
import "./login.css";
import {useState} from 'react';


const login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   return (
       <div className = "login-container">
           <h1>Welcome to TerpsCook</h1>
           <h2>Log In</h2>
           <div className = "login-form">
               <form>
                   <label>Email</label>
                   <input
                       type = "text"
                       required
                       value = {email}
                       onChange = {(e) => setTitle(e.target.value)}
                   />
                   <label>Password</label>
                   <input
                       type = "text"
                       required
                       value = {password}
                       onChange = {(e) => setTitle(e.target.value)}
                   />
                   <button>Log In</button>
                   <button>New? Sign Up</button>
               </form>
           </div>
       </div>
   )
}
export default login;