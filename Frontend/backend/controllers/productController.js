import productSchema from '../models/product.model.js'
import categorySchema from '../models/CategoryModel.js'
export async function createProductController(req,res){
    try {
        const { name,size,description,description1, price,MRP,category,quantity,photo,photo2,photo3,photo4,photo5}=req.body
        // validation 
        if(!name||!description||!price||!category||!quantity){
            return res.status(400).send({
                error:'All feild are required'
            })
        }
        //create product
        const product= await productSchema.create({
            name,
            size,
            description,
            description1,
            price,
            MRP,
            category,
            quantity,
            photo,
            photo2,
            photo3,
            photo4,
            photo5
        });
        //send response for created product
        res.status(201).send({
            success:true,
            message:'product Created Successfully',
            product,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'error in creating product',
        });
        
    }
}

export async function getproductcontroller(req,res){
    try {
        const data = await productSchema.find()
        res.status(200).send(data)
        console.log(data);
        
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function getoneproduct(req,res){
   try {
    const {id}=req.params;
    const data = await productSchema.findOne({_id:id})
    res.status(200).send(data)
   } catch (error) {
    res.status(400).send(error)
   }
}

export async function updateproduct(req,res){
    try {
        const {id}=req.params;
        const{...data}=req.body
        await productSchema.updateOne({_id:id},{$set:{...data}})
        res.status(201).send({message:'updated'})
    } catch (error) {
        res.status(400).send(error)
    }
}

export async function deleteproduct(req,res){
    try {
        const {id}=req.params;
        console.log(id);
        await productSchema.deleteOne({_id:id});
        res.status(200).send({
            message:"Sucessfully deleted"
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).send({error})
        
    }
}

export const productCategoryController = async (req,res) => {
    try {
        const {id} =req.params;
        const category =await categorySchema.findOne({_id:id});
        //fetch category by id
            if(!category){
                res.status(404).send({
                    success:false,
                    message:'category not found'

                });
            }
            const products = await productSchema.find({ category: category._id });

            res.status(200).send({
              success: true,
              category,
              products,
            });
        
    } catch (error) {
        console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: 'Error while getting products',
    });
    }
} 


//search product
export const searchProductController = async( req,res)=>{
   try {
    const {keyword} = req.params
    const results = await productSchema.find({
        $or:[
            {name:{$regex :keyword,$options:"i"}},
            {description:{$regex :keyword,$options:"i"}}
        ]
    })
    res.json(results);
   } catch (error) {
    console.log(error);
    res.status(400).send({
        success:false,
        message:'error in searchproduct',
        error,
    })
    
   } 
}