import React from "react";
import Category from "../Category/Category";
import "./Table.scss";
const Table = ({ rank, setRank, category, setCategory }) => {
  console.log(rank);
  const newRank = rank.sort((a, b) => {
    return b[0] - a[0];
  });
  const newRank5 = newRank.slice(0, 5);
  console.log(newRank);
  return (
    <div className="TableWrapper">
      <table className="rwd-table">
        <tr>
          <th>순위</th>
          <th>주제</th>
        </tr>
        {newRank5.map((el, index) => {
          return (
            <tr>
              <td data-th="Movie Title">{index + 1}</td>
              <td data-th="Genre">{el[1]}</td>
            </tr>
          );
        })}
      </table>

      <Category category={category} setCategory={setCategory}></Category>
    </div>
  );
};

export default Table;
