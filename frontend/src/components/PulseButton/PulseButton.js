import React from "react";
import "./PulseButton.scss";
const PulseButton = () => {
  return (
    <div id="container">
      <button class="face-button">
        <span class="face-container">
          <span class="eye left"></span>
          <span class="eye right"></span>
          <span class="mouth"></span>
        </span>
      </button>
    </div>
  );
};

export default PulseButton;
