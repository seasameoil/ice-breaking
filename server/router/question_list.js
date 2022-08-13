const { list } = require("../database/questions");

const express = require("express");
const app = express.Router();
const cors = require("cors");
/*const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());*/

const max = 28;
app.get("/", (req, res) => {
  const randomNumer = Math.floor(Math.random() * max);

  res.send(list.get(`${randomNumer}`));
});

module.exports = app;
