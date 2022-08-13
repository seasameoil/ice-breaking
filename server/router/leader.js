const express = require("express");
const router = express.Router();

router.get("/:usernum", (req, res) => {
    let userNum = parseInt(req.params.usernum);
    let leaderNum = String(Math.floor(Math.random() * userNum) + 1);
    res.send(leaderNum);
});

module.exports = router;
