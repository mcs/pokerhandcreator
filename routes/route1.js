const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('route1', { title: 'Add player count' });
});

module.exports = router;
