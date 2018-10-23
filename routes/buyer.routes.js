const {Router} = require('express')
var router=new Router()
const {post}=require('../controller/buyer.controller')

router.post('/',(req,res)=>{
    post(req.body,(err,result)=>{
        if(err){
            res.json(err)
            console.log(err)
        }else{
            res.json(result)
            console.log(result)
        }
    })
})

module.exports=router