const { list } = require("../database/questions");
const { like } = require("../database/like");

const express = require("express");
const app = express.Router();
const cors = require("cors");
//const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const max = 28;
app.get("/", (req, res) => {
  const randomNumer = Math.floor(Math.random() * max);

  res.send(list.get(`${randomNumer}`));
});

app.post("/", (req, res) => {
  const text = req.body.question;
  console.log(text);

  if (like.includes(text)) {
    like.like += 1;
  } else {
    like.push({ name: `${text}`, like: 1 });
  }
  const sendlist = { like: like };
  res.send(sendlist);
  //res.send(`${text}`);
});

module.exports = app;
