const express = require("express");
const app = express();
const test = require(".//router/test");
const list = require(".//router/list");

app.use("/", test);
app.use("/list", list);

const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
