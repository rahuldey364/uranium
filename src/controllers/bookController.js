const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let author_id=req.body.author
    let publisher_id= req.body.publisher

    let isAuthor= await authorModel.find({_id:author_id}).select({_id:1})
    let isPublisher= await publisherModel.find({_id:publisher_id}).select({_id:1})

    if(isAuthor.length>0){
        if(isPublisher.length>0){
            let bookCreated = await bookModel.create(book)
            res.send({data: bookCreated})
        }else{
            res.send({error:"Invalid publisher Id"})
        }
    }else{
        res.send({error:"invalid author id"})
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("author publisher")
    res.send({data: books})
}

const newData= async function(req,res){
    const update = await bookModel.updateMany({$or:[{"publisher":"625c6fb44f7a9d83dcae3324"},{"publisher":"625c6feb4f7a9d83dcae3326"}]},{isHardCover:true});
    res.send({msg:update})
}

const saleIncrease= async function(req,res){
    const priceIncrease = await bookModel.updateMany({rating:{$gt:3.5}},{$inc:{price:+10}});
    res.send({data:priceIncrease})
}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.newData=newData
module.exports.saleIncrease=saleIncrease