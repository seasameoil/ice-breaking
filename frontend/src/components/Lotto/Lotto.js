import React, { useState, useRef, useEffect } from "react";
import "./Lotto.scss";
import $ from "jquery";
import swal from "sweetalert2";
import Category from "../Category/Category";
const Lotto = ({ category, setCategory }) => {
  const ref = useRef();
  const [name, setName] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const onChange = (e) => {
    setName(e.target.value);
  };
  const [prizes, setPrizes] = useState([]);
  const minimum_jumps = 30; // 超過這數字開始進入抽獎
  let current_index = -1;
  let jumps = 0;
  let speed = 30;
  let timer = 0;
  let prize = -1;
  const registerData = () => {
    setTotalItems(prizes.length + 1);
    setPrizes([...prizes, name]);
    setName("");
  };
  function runCircle() {
    $(`[data-order="${current_index}"]`).removeClass("is-active");

    current_index += 1;

    if (current_index > totalItems - 1) {
      current_index = 0;
    }

    $(`[data-order="${current_index}"]`).addClass("is-active");
  }

  function generatePrizeNumber() {
    return Math.floor(Math.random() * totalItems);
  }

  function controllSpeed() {
    jumps += 1;
    runCircle();
    // 1. 抽到獎品停止遊戲
    if (jumps > minimum_jumps + 10 && prize === current_index) {
      clearTimeout(timer);

      new swal({
        title: `당첨자는 ${prizes[current_index]} 입니다.`,
        text: "Congratulations!",
        icon: "success",
      });

      prize = -1;
      jumps = 0;
      // 2. 還沒抽繼續跑
    } else {
      // 還沒進入關鍵抽獎階段前的速度 (前菜轉特效)
      if (jumps < minimum_jumps) {
        speed -= 5; // 加快
        // 決定獎品的位置
      } else if (jumps === minimum_jumps) {
        const random_number = generatePrizeNumber();
        prize = random_number;
      } else {
        // 下一個就是獎品時放慢鈍一下
        if (jumps > minimum_jumps + 10 && prize === current_index + 1) {
          speed += 600;
        } else {
          speed += 20; // 減速
        }
      }
      if (speed < 40) {
        speed = 40;
      }

      timer = setTimeout(controllSpeed, speed);
    }
  }

  function init() {
    jumps = 0;
    speed = 100;
    prize = -1;
    controllSpeed();
  }

  //   $(document).ready(() => {
  //     $("#js-start").on("click", init);
  //   });

  return (
    <>
      <div>
        <section class="container" id="js-lotto">
          {prizes.map((el, index) => {
            if (Math.floor(prizes.length / 2) === index) {
              return (
                <>
                  <div
                    onClick={init}
                    class="square square__start-btn"
                    id="js-start"
                  >
                    <div>START</div>
                  </div>
                  <div class="square" data-order={index}>
                    <div class="square__content">{el}</div>
                  </div>
                </>
              );
            }
            return (
              <div class="square" data-order={index}>
                <div class="square__content">{el}</div>
              </div>
            );
          })}
        </section>
      </div>
      <div className="registerWrapper">
        <input onChange={onChange} value={name} className="LottoInput"></input>
        <div className="register" onClick={registerData}>
          등록
        </div>
        <div className="delete">삭제</div>
      </div>
      <Category category={category} setCategory={setCategory}></Category>
    </>
  );
};

export default Lotto;
