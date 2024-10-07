const authorize = (req,res,next)=>{
    /*an example of how to properly and inproper use of this */
    const {apikey} = req.query
    if(apikey === 'ping'){
        console.log('authorized access is not granted jk')
        //this modifies the request for the next response
        req.user = {name: "Jersey Mikes", id: 123456789}
        next()
    }else{
        console.log("authoize")
        res.send({results:[], status: 401,message:"Acess Denied"})
        next()
    }
}

module.exports = authorize