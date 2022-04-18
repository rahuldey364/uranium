const publisherModel = require("../models/publisherModel")

const createNewPublisher = async function(req,res){
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data:publisherCreated})
}
const getPublisherData = async function(req,res){
    let publishers = await publisherModel.find()
    res.send({data:publishers})
}

module.exports.createNewPublisher=createNewPublisher
module.exports.getPublisherData=getPublisherData