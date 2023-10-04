import React from "react";
import "./HeroSection.css";
import Login from "./Login";

const HeroSection = () => {
  return (
    <div className="herosection">
      <h1>ID Evolve</h1>
      <p>A modern way of Student's ID card</p>
      <div className="loginbtn">
        <Login />
      </div>
    </div>
  );
};

export default HeroSection;
