import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    plateform:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    sinopsis:{
        type:String
    },
    imageUrl:{
        type:String,
        required:true
    },
    editor:{
        type:String,
        required:true
    }
})

const articleModel = mongoose.model("article", articleSchema);

export default articleModel;