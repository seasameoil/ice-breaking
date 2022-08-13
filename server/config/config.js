const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const config = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: "like_list",
});

config.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }

  console.log("connected~");
});

module.exports = config;
