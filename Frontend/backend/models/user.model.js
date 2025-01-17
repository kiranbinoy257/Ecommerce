import mongoose,{Mongoose,model}from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true  
    },
    address:{
        type:String,
        required:true  
    },
    role:{
        type:Number,
        default:0

    }

},{timestamps:true})
export default mongoose.model.user ||mongoose.model('user',userSchema)