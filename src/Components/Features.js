import React from "react";
import Feature from "./Feature";
import "./Features.css";

const Features = () => {
  return (
    <div className="feat">
      <div className="feat_head">
        <h1>Features of ID Evolve</h1>
      </div>
      <div className="features">
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default Features;
