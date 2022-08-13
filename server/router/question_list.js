const { list } = require("../database/questions");
const { like } = require("../database/like");

const express = require("express");
const app = express.Router();
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

var i, j;

function findName(text, like) {
  for (i = 0; i < like.length; i++) {
    for (j = 0; j < 2; j++) {
      if (like[i][j] == text) return true;
    }
  }
  return false;
}

const max = 28;
app.get("/", (req, res) => {
  const randomNumer = Math.floor(Math.random() * max);

  res.send(list.get(`${randomNumer}`));
});

app.post("/", (req, res) => {
  const text = req.body.question;
  console.log(text);

  var temp = findName(text, like);
  if (temp != 0) {
    like[i][0] += 1;
  }

  res.send(like);
});

module.exports = app;
