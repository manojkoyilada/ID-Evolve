import React from "react";
import './Feature.css';

const Feature = () => {
  return (
    <div className="feature">
      <div className="image"></div>
      <div className="text">
        <div className="heading">
          <h1>Intelligence</h1>
        </div>
        <div className="subtext">
          <p>
            Copilot will work according to your preferences and is unique in its
            ability to understand the web, your business data, and your local
            context.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
