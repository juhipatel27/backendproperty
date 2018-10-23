const Sequelize=require('sequelize');
const {db}=require('../config/database')
const user=db.define('user',{
    uid:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    uname:{
        type: Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    phoneno:{
        type:Sequelize.STRING
    }
})

user.sync({force:false}).then(()=>{
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
})
module.exports = user