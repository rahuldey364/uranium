const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const productController= require("../controllers/productController")
const userController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const commonMW= require("../middlewares/commonMiddlewares")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", productController.createProduct)
router.post("/createUser",commonMW.mid ,userController.createUser)

router.post("/createOrder",commonMW.mid ,orderController.createOrder)





module.exports = router;