const Sequelize=require('sequelize');
const {db}=require('../config/database')
const seller=db.define('seller',{
    sid:{
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
    image:{
        type:Sequelize.STRING
    },
    location:{
        type:Sequelize.STRING
    },
    city:{
        type:Sequelize.STRING
    },
    buy:{
        type:Sequelize.INTEGER
    },
    bedroom:{
        type:Sequelize.INTEGER
    },
    bathroom:{
        type:Sequelize.INTEGER
    },
    balconies:{
        type:Sequelize.INTEGER
    },
    description:{
        type:Sequelize.STRING
    },
    uid:{
        type:Sequelize.INTEGER
    }
})

seller.sync({force:false}).then(()=>{
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
})
module.exports = seller