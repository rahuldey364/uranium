const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const newDeveloperSchema = new mongoose.Schema({
    name:String,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
	percentage:Number,
    batch:{
        type:ObjectId,
        ref:"newBatch"
    }
},{timestamps:true})

module.exports= mongoose.model('newDeveloper' , newDeveloperSchema)