const express = require("express");
const app = express();
const test = require("./router/test");

app.use("/test", test);

const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
