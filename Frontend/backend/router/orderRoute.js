import express from 'express';
import {
    CreateOrderController,
    getOrderController,
    showOneOrderController,
    ShowOrdersController,
    updateOrderlist,
} from '../controllers/orderController.js'
import { isAdmin,requireSigin} from '../middileware/authmiddleware.js';


const router=express.Router()


router.post ('/orders',requireSigin,CreateOrderController)

router.get('/getorders/:userid',requireSigin,getOrderController)

router.get('/getorders',requireSigin,ShowOrdersController)

router.post('/updateorder/:id',requireSigin,updateOrderlist)


export default router