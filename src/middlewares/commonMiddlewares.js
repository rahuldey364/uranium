
const mid= function ( req, res, next) {
    if(req.headers.isfreeappuser){
        next()
    }else{
        res.send({error:"the request is missing a mandatory header"})
    }
}


module.exports.mid= mid
