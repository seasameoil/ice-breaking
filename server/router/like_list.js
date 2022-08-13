const express = require("express");
const app = express.Router();
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

module.exports = app;
