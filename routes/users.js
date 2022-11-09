var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.locals.user = "Sebastian";
    res.locals.meta = [{
        "method": req.method
    }];
    res.locals.role = "Admin"; /*Admin || Client*/
    res.locals.data = [{
        "title": "Title from File Awesome JPG FILE",
        "subtitle": "Subtitle File Awesome JPG FILE",
        "filesize": 100,
        "unit": "mb",
        "url": "filename.jpg",
        "online": true
    },{
        "title": "Title from File Awesome PNG FILE",
        "subtitle": "Subtitle File Awesome PNG FILE",
        "filesize": 80,
        "unit": "mb",
        "url": "filename.png",
        "online": true
    },{
        "title": "Title from File Awesome EXE FILE",
        "subtitle": "Subtitle File Awesome EXE FILE",
        "filesize": 2,
        "unit": "gb",
        "url": "filename.exe",
        "online": false
    }];
    res.render("index", {title: "Users", user: res.locals.user, loged: true, data: res.locals.data})
});

module.exports = router;