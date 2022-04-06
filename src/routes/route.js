const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/test-me2', function (req, res) {
    res.send('My second ever api!')
});
router.get('/test-me3', function (req, res) {
    res.send('My final api!')
});

module.exports = router;
// adding this comment for no reason