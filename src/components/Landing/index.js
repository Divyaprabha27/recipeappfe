import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landingPage">
      <h1>Start Cooking</h1>
      <p>Let's join our community<br/>to cook better food!</p>

      <p>
        <button className="btn btn-success" onClick={() => navigate("/recipeapp")}>Get Started</button>
      </p>

      </div>
  );
};

export default Landing;