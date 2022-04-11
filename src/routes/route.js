const express = require('express');
const router = express.Router();
const booksController= require("../controllers/booksController")



router.post("/createBook", booksController.createBook  )

router.get("/getBooks", booksController.getBooks)

module.exports = router;