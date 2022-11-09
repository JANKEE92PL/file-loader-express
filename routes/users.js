var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render("index", {title: "Users", user: "Seba", login: false})
    res.send('respond with a resource');
});

module.exports = router;