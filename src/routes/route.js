const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/test-me-2", function (req, res) {
    res.send("My 2nd ever api!")
})

router.get("/test-me-3", function (req, res) {
    res.send("My 3rd ever api!")
})

router.get("/test-me-4", function (req, res) {
    res.send("My 4th ever api!")
})





module.exports = router;