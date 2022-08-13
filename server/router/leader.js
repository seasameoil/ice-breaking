const express = require("express");
const router = express.Router();

router.get("/:usernum", (req, res) => {
    let userNum = parseInt(req.params.usernum);
    let leaderNum = String(Math.ceil(Math.random() * userNum))
    res.send(leaderNum);
});

module.exports = router;
