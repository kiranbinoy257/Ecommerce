import express from "express";
import { isAdmin,requireSigin } from "../middileware/authmiddleware.js";
import {categoryController,CreateCategoryController,updateCategoryController,singlecategoryController,deleteCategoryController} from '../controllers/categorycontroller.js'

const router=express.Router()

router.post('/create-category',requireSigin,isAdmin,CreateCategoryController,)

router.put(
    "/update-category/:id",
    requireSigin,
    isAdmin,
    updateCategoryController
);
router.get("/get-category",categoryController)
router.get("/single-category/:id",singlecategoryController);




  router.delete(
    "/delete-category/:id",
    requireSigin,
    isAdmin,
   deleteCategoryController
  );
export default router