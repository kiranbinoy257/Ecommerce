import orderSchema from '../models/order.model.js'


export const CreateOrderController = async(req,res)=>{
    try {
        const {
            state:{
                productName,
                productDescription,
                productphoto,
                size,
                quantity,
                totalPrice,
                payment,
                userName,
                userid,
                userNumber,
                user2Number,
                userAddress,
                status
            },photo
        }=req.body
        const order = await orderSchema.create({
            photo,
            productName,
            productDescription,
            productphoto,
            size,
            quantity,
            totalPrice,
            payment:payment ||"processing",
            userName,
            userid,
            userNumber,
            user2Number,
            userAddress,
            status:status || "pending"
        });
        res.status(201).send({
            success:true,
            message:"order Created Succesfully",
            order,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in Creating Order",
        })
    }
}

export const getOrderController = async (req,res) =>{
    try {
        const {userid} = req.params;
        const orders=await orderSchema.find({userid:userid})
        res.status(200).send({
            success:true,
            orders,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error while gettting orders',
            error,
        })
        
    }
}

export const ShowOrdersController = async (req,res) =>{
    try {
        const orders = await orderSchema.find();
        res.status(200).send({
            success:true,
            orders,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in update"
        })
        
    }
}

export async function updateOrderlist(req,res)
{
    try {
        const {id}= req.params;
        const {...data}=req.body
        await orderSchema.updateOne({_id:id},
        {$set:{...data}})
        res.status(200).send({msg:"updated"})
    } catch (error) {
        res.status(400).send(error)
    }
}

export const showOneOrderController= async (req,res) =>{
    try {
        const {id}=req.params;
        const oneorder= await orderSchema.findOne({_id:id});
        res.status(200).send({
            success:true,
           oneorder,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
             message:'error in getting order'
        })
        
    }
}