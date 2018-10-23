const {Router} = require('express')
var router=new Router()
const {post,getAll,getAll1,getAll2,getAll3,getAll4}=require('../controller/seller.controller')
const multer = require('multer')
//const upload = multer({dest:'uploads/'})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {

        let extension = file.mimetype.includes("png") && ".png" || ".JPG" && ".jpg";
        console.log("hii",file.mimetype)
        cb(null, file.fieldname + '-' + Date.now()+extension)
    }
})
//var upload = multer({ storage: storage }).array('image')
var upload = multer({ storage: storage }).array('image')
// app.post('/profile', upload, function (req, res, next) {
//     console.log(req)
// })

router.post('/',upload,(req,res)=>{
    console.log(req)
    mynewfiles=[];
    for(let file of req.files){
        mynewfiles.push(file.filename);
    }
    req.body.image=JSON.stringify(mynewfiles);
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






//
// router.post('/',(req,res)=>{
//     post(req.body,(err,result)=>{
//         if(err){
//             res.json(err)
//             console.log(err)
//         }else{
//             res.json(result)
//             console.log(result)
//         }
//     })
// })

router.post('/search',(req,res)=>{

    getAll(req.body,(err,result)=>{
        if(err){
            res.json(err)
            console.log(err)
        }else{
            res.json(result)
        }
    })

})
router.post('/city',(req,res)=>{
        console.log(req.body.city)
    getAll1(req.body,(err,result)=>{
        if(err){
            res.json(err)
            console.log(err)
        }else{
            res.json(result)
        }
    })

})
router.post('/ptype',(req,res)=>{

    getAll2(req.body,(err,result)=>{
        if(err){
            res.json(err)
            console.log(err)
        }else{
            res.json(result)
        }
    })

})
router.post('/Rate',(req,res)=>{

    getAll3(req.body,(err,result)=>{
        if(err){
            res.json(err)
            console.log(err)
        }else{
            res.json(result)
        }
    })

})
router.post('/bedroom',(req,res)=>{

    getAll4(req.body,(err,result)=>{
        if(err){
            res.json(err)
            console.log(err)
        }else{
            res.json(result)
        }
    })

})









module.exports=router