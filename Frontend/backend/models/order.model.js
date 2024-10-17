import mongoose,{Mongoose,model} from 'mongoose';

const orderSchema = new mongoose.Schema(
{
    productName:{
        type:String,
        required:true,
    },
    productphoto:{
        type:String
    },
    productDescription:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    payment:{
        type:String,
        default: "processing",
    },
    userName:{
        type:String,
        required:true,
    },
    userid:{
        type:String,
        
    },
    photo:{
        type:String,
        required:true
    },
    userNumber:{
        type:Number,
        required:true
    },
    user2Number:{
        type:Number
    },
    userAddress:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Pending",
    }
},{
    timestamps:true
}
)
export default mongoose.model.order ||mongoose.model('order',orderSchema)