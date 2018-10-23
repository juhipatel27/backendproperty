const buyer=require('../schema/buyer.schema')

exports.post=(body,done)=>{
    user.create(body).then((buyer)=>{
        if(user){
            done(null,buyer)
        }
    }).catch((err)=>{
        console.log(err)
    })
}
