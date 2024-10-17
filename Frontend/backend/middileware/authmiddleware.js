import JWT from 'jsonwebtoken'
import userSchema from '../models/user.model.js';

//protected routes token base
export const requireSigin = async (req,res,nest)=>{
   try { 
    const decode = JWT.verify(req.headers.authorization,process.env.JWT_key);
    req.user = decode
    nest();
    
   } catch (error) {
    console.log(error);
    
   }
}
//admin access

export const isAdmin= async(req,res,nest) =>{
    try {
        const user = await userSchema.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:"unAuthorized Access"
            });
        }else{
            nest();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:'error in admin middileware '
        })

        
    }
}