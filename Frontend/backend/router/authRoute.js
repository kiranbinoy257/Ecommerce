import express from 'express'
import { registerController,
         loginController,
         testController, 
         Forget,
         verifyotp,
         updatePassword,
         updateProfile,
         
 } from '../controllers/authController.js';
import { requireSigin,isAdmin } from '../middileware/authmiddleware.js';
const router = express.Router();

//routing
// user register route
router.post('/register',registerController)

//LOGIN || post
router.post('/login',loginController)

//forgot password
router.post('/forgetpswd',  Forget)

router.post('/verifyotp',  verifyotp)
router.post('/resetpassword',  updatePassword)

//test routes
router.get('/test',requireSigin,isAdmin ,testController)

//protectd Route User Route
router.get('/user-auth',requireSigin,(req,res)=>{
    res.status(200).send({ok:true });
})

//protectd Route Admin Route auth
router.get('/admin-auth',requireSigin,(req,res)=>{
    res.status(200).send({ok:true });
})

//update profuile

router.put('/profile',requireSigin,updateProfile)
export default router