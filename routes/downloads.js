var express = require("express");
var router = express.Router();

/* GET Dashboard page. */
router.get("/", function (req, res, next) {
    res.render("layouts/downloads", {title: "Users", user: res.locals.user, loged: true, data: res.locals.data})
});

module.exports = router;