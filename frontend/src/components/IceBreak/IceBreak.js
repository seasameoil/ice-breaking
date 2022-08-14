import React, { useEffect, useState, useRef } from "react";

import axios from "../../api";
import CuteCat from "../CuteCat/CuteCat";
import BackCard from "../BackCard/BackCard";
import Category from "../Category/Category";
import "./IceBreak.css";
const IceBreak = ({ rank, setRank, category, setCategory }) => {
  const [topic, setTopic] = useState("");
  const [realTopic, setRealTopic] = useState("");
  const [active, setActive] = useState(false);
  const ref = useRef();
  const heartRef = useRef();
  const animationHeartRef = useRef();

  const callApi = async () => {
    setActive(false);
    await axios.get("http://localhost:8080/question").then(async (res) => {
      console.log(res.data);
      setTopic(res.data);
      await axios.get(`http://localhost:8080/test/input/${res.data}`);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    const listener = async (event) => {
      console.log("마우스 올렸다.");
      callApi();
      setTimeout(() => {
        console.log("tttttttt");
        onSub();
      }, 800);
    };

    ref.current.addEventListener("mouseenter", listener);

    return () => {
      window.removeEventListener("mouseenter", listener);
    };
  }, []);
  const onSub = () => {
    axios
      .get("http://localhost:8080/test/output", {
        responseType: "arraybuffer",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const context = new AudioContext();
        context.decodeAudioData(res.data, (buffer) => {
          const source = context.createBufferSource();
          source.buffer = buffer;
          source.connect(context.destination);
          source.start(0);
        });
      });
  };

  const like = () => {
    axios
      .post("http://localhost:8080/question", {
        question: topic,
      })
      .then((res) => {
        console.log(res);
        setRank(res.data);
        console.log(res.data);
      });
  };
  // heartRef.curret.addEventListener("click", () => {
  //   // animationHeart.classList.add("animaiton");
  //   animationHeartRef.curret.classList.add("animation");
  //   // heart.classList.add("fill-color");
  // });

  // animationHeartRef.curret.addEventListener("click", () => {
  //   animationHeartRef.curret.classList.remove("animation");
  //   // heart.classList.remove("fill-color");
  // });

  // return () => {
  //   animationHeartRef.curret.removeEventListener("click", () => {
  //     animationHeartRef.curret.classList.remove("animation");
  //     // heart.classList.remove("fill-color");
  //   });
  //   heartRef.curret.removeEventListener("click", () => {
  //     animationHeartRef.curret.classList.remove("animation");
  //     // heart.classList.remove("fill-color");
  //   });
  // };
  return (
    <div className="icebreak">
      <div className="wrapper">
        <div ref={ref} class="flip">
          <div
            onClick={() => {
              setActive(!active);
              like();
            }}
            className="trick"
          ></div>
          <div class="Appcard">
            <div class="front">
              <CuteCat
                text={topic}
                setActive={setActive}
                active={active}
              ></CuteCat>
            </div>
            <div class="back">
              <BackCard text={topic} active={active}></BackCard>
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

export default IceBreak;
