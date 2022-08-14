import React from "react";
import "./CuteCat.css";
const CuteCat = ({ setActive, isNotHeart, text, active }) => {
  return (
    <div className="CuteCateTest">
      <section class="CuteCatcontainer">
        <div class="CuteCatcat">
          <div class="CuteCatears">
            <p class="CuteCatear"></p>
            <p class="CuteCatear"></p>
          </div>
          <p class="CuteCathead">
            <div class="CuteCateyes">
              <p class="CuteCateye"></p>
              <p class="CuteCateye"></p>
            </div>
            <p class="CuteCatnose"></p>
          </p>
          <p class="CuteCatbody"></p>
          <p class="CuteCattail"></p>
          <p class="CuteCattail-curl"></p>
        </div>
      </section>
    </div>
  );
};

export default CuteCat;
