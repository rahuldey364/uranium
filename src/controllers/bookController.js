const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList=  async function(req,res){
    let allBooks= await BookModel.find().select({bookName: 1, authorName: 1, _id: 0})
    res.send(allBooks)
}

const getBooksInYear=  async function(req,res){
    let year= req.query.year
    let allBooks= await BookModel.find({ year : year } )
    res.send(allBooks)
}

const getParticularBooks=  async function(req,res){
    let key= Object.keys(req.body)
    let value= Object.values(req.body)
    let allBooks= await BookModel.find( {[key] : value}  )
    res.send(allBooks)
}

const getXINRBooks=  async function(req,res){
    
    let allBooks= await BookModel.find( { 
        $or: [ {"prices.indianPrice" : "₹399" } ,{"prices.indianPrice" : "₹1199" },{"prices.indianPrice" : "₹499" }]
    })
    res.send(allBooks)
}


const getRandomBooks=  async function(req,res){
    
    let allBooks= await BookModel.find( { 
        $or: [ {stockAvailable : true } ,{ totalPages: { $gt:  500 }  }]
    })
    res.send(allBooks)
}





module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
