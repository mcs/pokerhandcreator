const express = require('express');
const router = express.Router();
const pokerstarshandrenderer = require("../services/pokerstarshandrenderer");

/* GET home page. */
router.post('/', function (req, res, next) {
    let handinfo = req.body;
    console.log("Handinfo:", handinfo);
    let logResult = pokerstarshandrenderer(handinfo);
    res.setHeader('Content-Type', 'text/plain');
    res.send(logResult);
});

module.exports = router;
