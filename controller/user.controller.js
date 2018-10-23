const user=require('../schema/user.schema')
var {db}=require('../config/database')
var Sequelize=require('sequelize')
exports.post=(body,done)=>{
    user.create(body).then((user)=>{
        if(user){
            done(null,user)
        }
    }).catch((err)=>{
        console.log(err)
    })
}
 exports.post1=(body,done)=>{
   user.find({where:{email:body.email,password:body.password}}).then((user)=>{
       done(null,user)
   }).catch((err)=>{
       done(err)
       console.log(err)
   })
 }