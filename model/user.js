import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    delivaryAdress:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});


const userModel = mongoose.model("user", userSchema);

export default userModel;