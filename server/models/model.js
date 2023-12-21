import mongoose from "mongoose";

const modelData = mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:Number
    }
})

export default mongoose.model('Data', modelData);
