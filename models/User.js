const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
            "name": {type:String,required:true},
            "dob": String,
            "blood": String,
            "mobile": String,
            "address": String,
            "pin": String,
            "district": String,
            "place": String,
            "email": String,
            "username": String,
            "pass": String
    }
)

let usermodel=mongoose.model("users",schema);
module.exports={usermodel}