import express from 'express'
import { isAdmin,requireSigin } from '../middileware/authmiddleware.js'
import { createProductController,deleteproduct,getoneproduct,getproductcontroller,productCategoryController,updateproduct ,searchProductController} from '../controllers/productController.js'

const router = express.Router()

router.post('/create-product', requireSigin, isAdmin, createProductController)


router.get('/get-product', getproductcontroller)


router.get('/getone-product/:id', getoneproduct)

router.post('/update-product/:id', updateproduct)


router.delete('/delete-product/:id', deleteproduct)

router.get('/product-category/:id', productCategoryController)

router.get('/search/:keyword',searchProductController)


export default router
