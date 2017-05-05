const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new_hand/1', { title: 'Create new hand' });
});

router.post('/2', function(req, res, next) {
    let playercount = req.body.playercount || "9";
    let smallblind = req.body.smallblind;
    let bigblind = req.body.bigblind;
    let ante = req.body.ante;
    res.render('new_hand/2', {
        title: 'Add more table information',
        playercount: playercount,
        smallblind: smallblind,
        bigblind: bigblind,
        ante: ante
    });
});

module.exports = router;
