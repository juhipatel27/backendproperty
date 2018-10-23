var express=require('express'),app=new express();
const bodyparser=require('body-parser');
// var userschema=require('./schema/user.schema')
// var sellerschema=require('./schema/seller.schema')
// var buyerschema=require('./schema/buyer.schema')
var userroute=require('./routes/user.routes')
var sellerroute=require('./routes/seller.routes')
var buyerroute=require('./routes/buyer.routes')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
const multer = require('multer')
//const upload = multer({dest:'uploads/'})
const path=require('path');
app.use(express.static(path.join(__dirname,'uploads')));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {

        let extension = file.mimetype.includes("png") && ".png" || ".jpg";
        console.log("hii",file.mimetype)
        cb(null, file.fieldname + '-' + Date.now()+extension)
    }
})
var upload = multer({ storage: storage }).array('imagename')
app.post('/profile', upload, function (req, res, next) {
  console.log(req)
    res.json({status:'ok'})
})







app.use('/user',userroute)
app.use('/seller',sellerroute)
app.use('/buyer',buyerroute)

app.get('/',(req,res)=>{
    res.end("hello start property backend")

})

app.listen(3000,(err)=>{
    if(err) {
        console.log(err)
        process.exit(1)
    }
})


