const seller=require('../schema/seller.schema')
const user=require('../schema/user.schema')
var {db}=require('../config/database')
var Sequelize=require('sequelize')
exports.post=(body,done)=>{
    seller.create(body).then((seller)=>{
        if(seller){
            done(null,seller)
        }
    }).catch((err)=>{
        console.log(err)
    })
}

exports.getAll=(body,done)=>{

    db.query("select * from sellers where city='"+body.city+"' && Rate="+body.Rate+" && ptype='"+body.ptype+"' && bedroom="+body.bedroom+" && bathroom="+body.bathroom+" ", {type: Sequelize.QueryTypes.SELECT}).then((seller) => {
        done(null, seller)
    }).catch((err) => {
        console.log(err)
    })
}

exports.getAll1=(body,done)=>{

    db.query("select * from sellers where city='"+body.city+"' ", {type: Sequelize.QueryTypes.SELECT}).then((seller) => {
        done(null, seller)
    }).catch((err) => {
        console.log(err)
    })
}

exports.getAll2=(body,done)=>{

    db.query("select * from sellers where ptype='"+body.ptype+"' ", {type: Sequelize.QueryTypes.SELECT}).then((seller) => {
        done(null, seller)
    }).catch((err) => {
        console.log(err)
    })
}
exports.getAll3=(body,done)=>{
    let rate=body.rate
    db.query("select * from sellers where Rate = "+body.Rate+" ", {type: Sequelize.QueryTypes.SELECT}).then((seller) => {
        done(null, seller)
    }).catch((err) => {
        console.log(err)
    })
}
exports.getAll4=(body,done)=>{

    db.query("select * from sellers where bedroom= "+body.bedroom+" ", {type: Sequelize.QueryTypes.SELECT}).then((seller) => {
        done(null, seller)
    }).catch((err) => {
        console.log(err)
    })
}