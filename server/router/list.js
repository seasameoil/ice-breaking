const ArrayList = require("arraylist");
const express = require("express");
const app = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

const max = 9;
var list = new ArrayList();
list.set(0, "가장 좋아하는 음식과 싫어하는 음식은 무엇입니까?");
list.set(1, "좋아하는 패션은 무엇입니까?");
list.set(2, "좋아하는 머리 스타일은 무엇입니까?");
list.set(3, "아침 식사로 어떤 음식을 좋아하나요?");
list.set(4, "한 달 휴가가 생긴다면 어디를 가고 싶나요?");
list.set(5, "당신이 유명해진다면 무엇으로 유명할까요?");
list.set(6, "문신한다면 어떤 문신을 하고 싶나요?");
list.set(7, "좋아하는 축제나 박람회가 있습니까?");
list.set(8, "좋아하는 TV 프로그램은 무엇인가요?");
list.set(9, "좋아하는 운동이 있나요?");

app.get("/", (req, res) => {
  const randomNumer = Math.floor(Math.random() * max);

  res.send(list.get(`${randomNumer}`));
});

module.exports = app;
