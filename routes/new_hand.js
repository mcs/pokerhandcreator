const express = require('express');
const router = express.Router();
const pokerstarshandrenderer = require("../services/pokerstarshandrenderer");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('new_hand/1', {title: 'Create new hand'});
});

router.post('/2', function (req, res, next) {
    let handinfo = req.body.handinfo;
    console.log("Handinfo:", handinfo);
    let playercount = handinfo.playercount || "9";
    handinfo.players = [];
    let i;
    for (i = 0; i < playercount; i += 1) {
        handinfo.players.push({
            name: "Player_" + (i + 1),
            stack: 100 * parseInt(handinfo.bigblind, 10)
        });
    }
    res.render('new_hand/2', {
        title: 'Add more table information',
        handinfo: handinfo
    });
});

router.post('/3', function (req, res, next) {
    let handinfo = req.body.handinfo;
    console.log("Handinfo:", handinfo);
    let logResult = pokerstarshandrenderer(handinfo);
    res.render('new_hand/3', {
        title: 'Add more table information',
        handinfo: handinfo,
        logResult: logResult
    });
});

module.exports = router;
