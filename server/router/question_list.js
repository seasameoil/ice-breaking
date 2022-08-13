const { list } = require("../database/questions");

const express = require("express");
const app = express.Router();
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const max = 28;
app.get("/", (req, res) => {
  const randomNumer = Math.floor(Math.random() * max);

  res.send(list.get(`${randomNumer}`));
});

/*app.post("/", (req, res) => {
  const text = req.body.question;
  console.log(text);

  if (findName(text, like)) {
    like.like += 1;
  } else {
    like.push({ name: `${text}`, like: 1 });
  }

  like.sort();
  //const sendlist = { like: like };
  //res.send(sendlist);
  //res.send(`${text}`);
  res.send(like);
});*/

module.exports = app;
