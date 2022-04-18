const batchModel=require("../models/batchModel")

let createBatch= async function(req,res){
    let data=req.body
    let batchCreated= await batchModel.create(data)
    res.send({msg:batchCreated})
}



module.exports.createBatch = createBatch