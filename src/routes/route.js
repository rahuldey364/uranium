const express = require('express');
const subArray = require('../subarrays/subArray')
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send(logger.welcome)   
});

router.get('/test-me-2', function (req, res) {
    res.send(helper.printDate)   
});

router.get('/test-me-3', function (req, res) {
    res.send(helper.printMonth)   
});

router.get('/test-me-4', function (req, res) {
    res.send(helper.getBatchInfo)   
});

router.get('/test-me-5', function (req, res) {
    res.send(formatter.trim + "<br>" + ' in Lower Case : ' + formatter.changetoLowerCase + "<br>" + ' in Upper Case : ' + 
    formatter.changeToUpperCase)  
});

router.get('/test-me-6', function (req, res) {
    res.send(subArray.subArray);
    console.log(subArray.lastNumbers);   
});






module.exports = router;
// adding this comment for no reason