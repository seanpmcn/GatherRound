var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Connection Successful: Greetings from the server!")
});

module.exports = router;