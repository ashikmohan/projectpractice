const mongoose=require('mongoose')
const indexSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }


})

const UserModel=mongoose.model('user',indexSchema)
module.exports=UserModel