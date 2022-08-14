import React from "react";
import "./Dog.css";
const Dog = () => {
  return (
    <div class="Dogcontainer">
      <div class="Dogdog">
        <div class="Dogdog-head">
          <div class="Dogdog-ears Dogears-left"></div>
          <div class="Dogdog-ears Dogears-right"></div>
          <div class="Dogdog-eyes"></div>
          <div class="Dogdog-mouth">
            <div class="Dogdog-nose"></div>
            <div class="Dogdog-tongue"></div>
          </div>
        </div>
        <div class="Dogdog-tail"></div>
        <div class="Dogdog-body">
          <div class="Dogdog-foot"></div>
        </div>
        <div class="Dogball"></div>
      </div>
    </div>
  );
};

export default Dog;
