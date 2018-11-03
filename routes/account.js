const express = require("express");
const router = express.Router();
const db = require("../models/index");
const nameGenerator = require("../bin/name_generator");
const passwordGenerator = require("../bin/password_generator");
var userInfo = {};
var shownUserInfo = {};

// Generate New Username And Password
router.get("/new", function(req, res){
    if(userInfo.userName && userInfo.userPassword){
        nameGenerator.findIfNameExistsInDB(userInfo.userName).then(doesExist => {
            if(doesExist){
                nameGenerator.generateNameAndCheckIfExists().then(() => {
                    userInfo.userName = nameGenerator.name;
                    shownUserInfo.userName = nameGenerator.capitalizeAndRemoveUnderscores(userInfo.userName);
                    res.render("new", {userInfo: userInfo, shownUserInfo: shownUserInfo});
                });
            } else {
                res.render("new", {userInfo: userInfo, shownUserInfo: shownUserInfo});
            }
        })
    }  
    else {
        shownUserInfo.userPassword = passwordGenerator.generatePassword();
        userInfo.userPassword = shownUserInfo.userPassword.toLowerCase();
        nameGenerator.generateNameAndCheckIfExists().then(() => {
            userInfo.userName = nameGenerator.name;
            shownUserInfo.userName = nameGenerator.capitalizeAndRemoveUnderscores(userInfo.userName);
            res.render("new", {userInfo: userInfo, shownUserInfo: shownUserInfo});
        });
    }
});

// Create New Username only
router.get("/newname", function(req, res){
    nameGenerator.generateNameAndCheckIfExists().then(name => {
        userInfo.userName = nameGenerator.name;
        shownUserInfo.userName = nameGenerator.capitalizeAndRemoveUnderscores(userInfo.userName);
        res.redirect("new");
    });
});

// Create New Password only
router.get("/newpassword", function(req, res){
    shownUserInfo.userPassword = passwordGenerator.generatePassword();
    userInfo.userPassword = shownUserInfo.userPassword.toLowerCase();
    res.redirect("new");
});

// Confirm and Submit New Account 
router.post("/new", function(req, res){
    nameGenerator.findIfNameExistsInDB(userInfo.userName).then(doesExist => {
        if(doesExist){
            res.send("Error. Username already exists in database");
        } else {
            db.user.create({
                name: userInfo.userName,
                password: userInfo.userPassword
            }).then(function(){
                res.render("saved", {userInfo: userInfo, shownUserInfo: shownUserInfo});
            });
        }
    })
});

module.exports = router;