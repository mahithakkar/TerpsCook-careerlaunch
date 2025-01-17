import React, { useState } from "react";
import AboutMe from "./AboutMe"; // Import the AboutMe component

const App = () => {
  const [page, setPage] = useState("home"); // State to track which page is active

  return (
    <div>
      {/* Navigation */}
      <nav style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setPage("home")} style={navButtonStyle}>
          Home
        </button>
        <button onClick={() => setPage("about")} style={navButtonStyle}>
          About Us
        </button>
      </nav>

      {/* Page Content */}
      {page === "home" && <h1>Welcome to TerpsCook!</h1>}
      {page === "about" && <AboutMe />}
    </div>
  );
};

const navButtonStyle = {
  padding: "10px 20px",
  margin: "0 10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default App;
