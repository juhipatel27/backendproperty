const Sequelize=require('sequelize');
const {db}=require('../config/database')
const buyer=db.define('tbl_buyer',{
    bid:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    ptype:{
        type: Sequelize.STRING
    },
    Rate:{
        type:Sequelize.INTEGER
    },
    uid:{
        type:Sequelize.INTEGER
    }
})

buyer.sync({force:false}).then(()=>{
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
})
module.exports = buyer