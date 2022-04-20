const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const createOrder= async function(req,res){
    const data=req.body
    const user_id=req.body.userId
    const product_id=req.body.productId

    const isProduct= await productModel.find({_id:product_id}).select({_id:1})
    const isUser= await userModel.find({_id:user_id}).select({_id:1})

    if(isUser.length>0){
        if(isProduct.length>0){
            if(req.headers.isfreeappuser==true){
                req.body.amount=0
                req.body.isFreeAppUser=true
                const createdOrder=await orderModel.create(data)
                res.send({msg:createdOrder})
            }else{
                let orderAmount = req.body.amount

                let userBalance = await userModel.find({_id:user_id}).select({balance:1,_id:0})
                let productPrice = await productModel.find({_id:product_id}).select({price:1,_id:0})

                userBalance=userBalance.map(x => x.balance)
                userBalance= userBalance.join(" ")
                userBalance=parseInt(userBalance)

                productPrice=productPrice.map(x => x.price)
                productPrice= productPrice.join(" ")
                productPrice=parseInt(productPrice)

                console.log(userBalance)
                console.log(productPrice)

                if(userBalance >= productPrice){
                    req.body.amount = productPrice
                    req.body.isFreeAppUser=false
                    let updatedBalance= await userModel.findOneAndUpdate(
                        {_id:user_id},
                        {$inc:{balance:-productPrice}},
                        {new:true})
                    
                    const createdOrder=await orderModel.create(data)
                    res.send({msg:createdOrder})
                }else{
                    res.send({error:"the user doesn't have enough balance"})
                }
            }
        }else{
            res.send({error:"productId is invalid"})
        }
    }else{
        res.send({error:"userId is invalid"})
    }
}



module.exports.createOrder=createOrder