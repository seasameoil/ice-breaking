const express = require("express");
const router = express.Router();

router.get("/:userNames", (req, res) => {
    let userNames = req.params.userNames.split(',');
    let userNum = userNames.length;
    let leaderNum = Math.floor(Math.random() * userNum);
    let leader = userNames[leaderNum];
    let sendMassage = leader + "님이 조장입니다!";
    res.send(sendMassage);
});

module.exports = router;
