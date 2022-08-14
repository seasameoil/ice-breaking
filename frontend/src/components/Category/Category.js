import React from "react";
import "./Category.scss";
const Category = ({ category, setCategory }) => {
  console.log(category);
  return (
    <div
      className={
        category === "lotto" || category === "table"
          ? `Categorymodal2`
          : `Categorymodal`
      }
    >
      <div
        onClick={() => setCategory("icebreak")}
        className="Categorycard  Categoryarchipelago"
      >
        <a
          className={
            category === "icebreak"
              ? `Categorycard-category cattt`
              : `Categorycard-category`
          }
          title="HTML & CSS"
        >
          <span>아이스 브레이킹</span>
        </a>
      </div>
      <div
        onClick={() => setCategory("future")}
        className="Categorycard  Categorybutte"
      >
        <a
          className={
            category === "future"
              ? `Categorycard-category cattt`
              : `Categorycard-category`
          }
          title="HTML & CSS"
        >
          <span>일정 추천</span>
        </a>
      </div>

      <div
        onClick={() => setCategory("lotto")}
        className="Categorycard  Categorydune"
      >
        <a
          className={
            category === "lotto"
              ? `Categorycard-category cattt`
              : `Categorycard-category`
          }
          title="HTML & CSS"
        >
          <span>대표자 뽑기</span>
        </a>
      </div>
      <div
        onClick={() => setCategory("table")}
        className="Categorycard  Categoryestuary"
      >
        <a
          className={
            category === "table"
              ? `Categorycard-category cattt`
              : `Categorycard-category`
          }
          title="HTML & CSS"
        >
          <span>주제 순위</span>
        </a>
      </div>
    </div>
  );
};

export default Category;
