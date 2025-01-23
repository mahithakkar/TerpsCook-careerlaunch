import React from "react";
import "./aboutme.css";
import { FaStar, FaHome, FaInfoCircle } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { IoFastFoodOutline } from "react-icons/io5";

const AboutMe = () => {
  const teamMembers = [
    {
      name: "Mahi Thakkar",
      github: "https://github.com/mahithakkar",
      linkedin: "https://www.linkedin.com/in/mahi-thakkar/"
    },
    {
      name: "Savya Miriyala",
      github: "https://github.com/msavya",
      linkedin: "https://www.linkedin.com/in/savya-miriyala/"
    },
    {
      name: "Sophia Jin",
      github: "https://github.com/sophiajinn",
      linkedin: "https://www.linkedin.com/in/sophia-jin/"
    }
  ];

  return (
    <div className="about-container" style={{display: 'block', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgb(235, 242, 251)', width: '70%', borderRadius: '10px'}}>
      {/* App Description */}
      <h1 style={{marginTop: '60px', padding: '30px'}}>About TerpsCook<IoFastFoodOutline style={{marginLeft: '10px'}} /></h1>
      <p className="description" style={{padding: '20px'}}>
        TerpsCook is designed to make cooking simple and creative. Using AI, the app helps you 
        generate recipes based on the ingredients you already have. Whether you're trying to 
        reduce waste or discover new dishes, TerpsCook is here to inspire your next meal.
      </p>

      {/* Team Section */}
      <h2>Meet the Team</h2>
      <div className="team-grid" style={{padding: '15px'}}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <h3>{member.name}</h3>
            <div className="links">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{" "}
              |{" "}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
      {/*Navigation Buttons*/}
      <Link to="/savedrecipes">  
                    <div className="Buttons" style={{display: 'inline-flex', marginBottom: '30px'}}>
                        <button style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black', marginTop: '100px', width: '200px'}}><FaStar size={20}/><br />Saved Recipes</button> 
                    </div>
                </Link>
                <Link to="/">
                    <div className="Buttons" style={{display: 'inline-flex'}}>
                        <button style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', border: '1px solid black', width: '200px'}}><FaHome size={20}/><br />Home</button>
                    </div>
                </Link>
                
    </div>
  );
};

export default AboutMe;
