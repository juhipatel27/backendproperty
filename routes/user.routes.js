const {Router} = require('express')
var router=new Router()
const {post,post1}=require('../controller/user.controller')

router.post('/',(req,res)=>{
    console.log(req.body.name)
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

router.post('/login',(req,res)=>{
    console.log(req.body.email)
    post1(req.body,(err,result)=>{
        if(err){
            res.json(err)
            console.log(err)
          //  console.log("invalid user name and password")
        }else if(result == null){
            res.json({error:'invalid'});
            console.log("invalid user name and password");
        }
        else{
            res.json(result)
            console.log(result)
        }
    })
})

module.exports=router;