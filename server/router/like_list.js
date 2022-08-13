const express = require("express");
const ejs = require("ejs");
const db = require("../config/config");
const app = express.Router();
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//app.set("view engine", "ejs");

app.get("/", (req, res) => {
  db.query("SELECT * FROM likes ORDER BY likes DESC", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  });
});

/*app.post("/", (req, res) => {
  db.query(
    "INSERT INTO like_list (id, question, likes) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE question=VALUES(question), likes=likes+1",
    (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(result);
      res.send(result);
    }
  );
  let find_sql = "SELECT * FROM like_list ORDER BY likes DESC";
  console.log(req.body.question + " " + req.body.likes);
  res.send(`${req.body.likes}`);
});*/

module.exports = app;
