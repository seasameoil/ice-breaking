import React, { useEffect, useState, useRef } from "react";
import axios from "../../api";

import BackCard from "../BackCard/BackCard";
import Category from "../Category/Category";
import CuteCat from "../CuteCat/CuteCat";
import Dog from "../Dog/Dog";
import "./Future.css";
const Future = ({ category, setCategory }) => {
  const [topic, setTopic] = useState("");
  const [active, setActive] = useState(false);
  const ref = useRef();

  const callApi = async () => {
    await axios.get("http://localhost:8080/place").then(async (res) => {
      console.log(res.data);
      setTopic(res.data);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    const listener = async (event) => {
      console.log("마우스 올렸다.");
      callApi();
    };
    ref.current.addEventListener("mouseenter", listener);
    return () => {
      window.removeEventListener("mouseenter", listener);
    };
  }, []);

  return (
    <div className="future">
      <div className="wrapper">
        <div ref={ref} class="flip">
          {/* <div onClick={() => setActive(!active)} className="trick"></div> */}
          <div class="Appcard">
            <div class="front">
              <Dog></Dog>
            </div>
            <div class="back">
              <BackCard isNotHeart text={topic} active={active}></BackCard>
            </div>
          </div>
        </div>

        {/* <div className="test">
          <PulseButton></PulseButton>
        </div> */}
        {/* <button style={{ marginTop: "50px" }} onClick={onSub}>
          dadadadada
        </button> */}
        <Category category={category} setCategory={setCategory}></Category>
      </div>
    </div>
  );
};

export default Future;
