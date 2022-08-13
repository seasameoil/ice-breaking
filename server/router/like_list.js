const { list } = require("../database/like");

const express = require("express");
const app = express.Router();
const cors = require("cors");

app.cors();

app.get("/", (req, res) => {
  res.send(list);
});

module.exports = app;
