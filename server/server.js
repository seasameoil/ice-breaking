const express = require("express");

const app = express();
const test = require(".//router/test");
const question = require("./router/question_list");
const place = require("./router/place_list");
const like = require("./router/like_list");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/test", test);
app.use("/question", question);
app.use("/place", place);
app.use("/likes", like);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
