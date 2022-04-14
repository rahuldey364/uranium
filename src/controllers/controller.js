const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorsModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getAllBooks= async function(req,res){
    let fAuthor= await authorModel.find({"author_name":"Chetan Bhagat"})
    let id = fAuthor[0].author_id
    let Books= await bookModel.find({author_id : id})
    res.send({msg: Books})
}

const getAuthorName = async function(req,res){
    // let bookD =await bookModel.find({"name":"Two states" })
    // let id = bookD[0].author_id
    // let aName = await authorModel.find({"author_id":id }).select({author_name:1,_id:0})
    // let bkname = bookD[0].name
    // let updatedPrice = await bookModel.findOneAndUpdate(
    //     {name: bkname},
    //     {price:100},
    //     {new:true}).select({price:1,_id:0})

    let updatedPrice =await bookModel.findOneAndUpdate({"name":"Two states" },{$set:{price:100}},{new:true}).select({price:1,_id:0})
    let BookD = await bookModel.find({"name":"Two states" })
    let id = BookD[0].author_id
    let aName = await authorModel.find({author_id:id}).select({author_name:1,_id:0})
    res.send({msg: aName, updatedPrice:updatedPrice})
}

const authorNames = async function(req,res){
    let fBooks =await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let id =  fBooks.map(x => x.author_id)
    let authorN = []
    for(i=0;i<id.length;i++){
        let x = b[i];
        let newBooks = await authorModel.find({author_id:x}).select({author_name:1,_id:0})
        authorN.push(newBooks)
    }

    res.send(authorN)
}


module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.getAllBooks=getAllBooks
module.exports.getAuthorName=getAuthorName
module.exports.authorNames=authorNames