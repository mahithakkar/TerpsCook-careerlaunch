
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Ingredients from "./Pages/ingredients";
import Output from "./Pages/output";
import Savedrecipes from "./Pages/savedrecipes";
import Aboutme from "./Pages/aboutme";


function App() {
   return (
       <Router>
           <Routes>
               {/* Default route (/) goes to the Login page */}
               <Route path="/" element={<Login />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/ingredients" element={<Ingredients />} />
               <Route path="/output" element={<Output />} />
               <Route path="/savedrecipes" element={<Savedrecipes />} />
               <Route path="/aboutme" element={<Aboutme />} />
           </Routes>
       </Router>
   );
}


export default App;