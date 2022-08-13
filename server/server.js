const express = require("express");
const app = express();
const test = require(".//router/test");
const question = require("./router/question_list");
const place = require("./router/place_list");
//const like = require("./router/like_list");

app.use("/", test);
app.use("/question", question);
app.use("/place", place);
//app.use("/", like);

const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
