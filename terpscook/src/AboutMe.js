import React from "react";
import "./AboutMe.css";

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
      name: "Sophia Jinn",
      github: "https://github.com/sophiajinn",
      linkedin: "https://www.linkedin.com/in/sophia-jin/"
    }
  ];

  return (
    <div className="about-container">
      {/* App Description */}
      <h1>About TerpsCook</h1>
      <p className="description">
        TerpsCook is designed to make cooking simple and creative. Using AI, the app helps you 
        generate recipes based on the ingredients you already have. Whether you're trying to 
        reduce waste or discover new dishes, TerpsCook is here to inspire your next meal.
      </p>

      {/* Team Section */}
      <h2>Meet the Team</h2>
      <div className="team-grid">
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
    </div>
  );
};

export default AboutMe;
