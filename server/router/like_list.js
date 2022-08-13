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
    if (!err) {
      //db.release();
      res.send({ products: data });
    } else res.send(err);
  });
});

app.post("/", (req, res) => {
  var param = req.body.question;

  /*db.query(
    "INSERT INTO likes (question, likes) VALUES (?, ?)",
    [param, 1],
    (err, row, fields) => {
      if (err) console.log(err);
      else console.log("inserted~");
    }
  );

  db.query(
    "UPDATE likes SET likes = likes+1 WHERE question=?",
    [param],
    (err, data) => {
      if (err) {
        console.log(err);
      }
    }
  );*/
  /*db.query(
      "SELECT count(*) FROM likes WHERE question=?",
      [param],
      (err, res) => {
        if (res != 0) {
          db.query(
            "UPDATE likes SET likes = likes+1 WHERE question=?",
            [param],
            (err, data) => {
              if (err) {
                console.log(err);
              }
            }
          );
        }

        db.query(
          "INSERT INTO likes (question, likes) VALUES (?, ?)",
          [param, 1],
          (err, row, fields) => {
            if (err) console.log(err);
            else console.log("inserted~");
          }
        );

        if (err) {
          console.log(err);
          throw err;
        }
      }
    );*/
  console.log(param + " " + req.body.likes);
  res.send();
});

module.exports = app;
