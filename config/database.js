const Sequelize=require('sequelize')

exports.db=new Sequelize('sample1','root','',{
    host:'localhost',
    dialect:'mysql',
    port:3306
})
