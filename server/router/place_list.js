const { list } = require("../database/place");

const express = require("express");
const app = express.Router();
const cors = require("cors");

const max = 15;
app.get("/", (req, res) => {
  const randomNumer = Math.floor(Math.random() * max);

  res.send(list.get(`${randomNumer}`));
});

module.exports = app;
