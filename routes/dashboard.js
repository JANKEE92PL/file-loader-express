var express = require("express");
var router = express.Router();

/* GET Dashboard page. */
router.get("/", function (req, res, next) {
    res.render("layouts/dashboard", { });
});
module.exports = router;
