const express = require("express");
const router = express.Router();
const db = require("../models/index");
const nameGenerator = require("../bin/name_generator");

// Index
router.get("/", function(req, res){
    res.render("index");
});
// Login
router.post("/login", function(req, res){
    var username = nameGenerator.decapitalizaAndRemoveSpaces(req.body.username.trim() ),
    password = req.body.password.toLowerCase();
    db.user.findOne({ where: {name: username } }).then(user => {
        if (!user) {
            res.render("failed_log_in");
        } else if (!user.validPassword(password)) {
            res.render("failed_log_in");
        } else {
            res.render("logged_in", {username: nameGenerator.capitalizeAndRemoveUnderscores(username)});
        }
    });
});
module.exports = router;