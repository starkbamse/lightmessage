const mongoose=require("mongoose")

let userSchema= new mongoose.Schema({
    username:{type:String,required:true}

})

let userModel=new mongoose.model("User",userSchema)

module.exports=userModel