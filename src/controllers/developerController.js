const batchModel=require("../models/batchModel")
const developerModel=require("../models/developerModel")

let createDeveloper= async function(req,res){
    let data=req.body
    let developerCreated= await developerModel.create(data)
    res.send({msg:developerCreated})
}

let getData =async function(req,res){
    let data=await developerModel.find().populate("batch")
    res.send({msg:data})
}

let scholarshipDeveloper =async function(req,res){
    let data=await developerModel.find({percentage:{$gte:70},gender:"female"})
    res.send({msg:data})
}

let developers = async function(req,res){
    let percentage =req.query.percentage
    let program=req.query.program
    let findBatch =await batchModel.find({name:program}).select({_id:1})
    let data =await developerModel.find({percentage:{$gte:percentage},batch:findBatch[0]._id})
    
    res.send({msg:data})
}

module.exports.getData=getData
module.exports.createDeveloper = createDeveloper
module.exports.scholarshipDeveloper=scholarshipDeveloper
module.exports.developers=developers