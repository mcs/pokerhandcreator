var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send({"array": ['test1', 'respond with a resource'], "_text": "Hello world!"});
});

module.exports = router;
