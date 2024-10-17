import express from 'express'
import connection from './backend/connection.js'
import env from 'dotenv'
import authRoute from './backend/router/authRoute.js'
import categoryRoutes from './backend/router/categoryRoute.js'
import productRoutes from './backend/router/productRoute.js'
import orderRoutes from './backend/router/orderRoute.js'
import cors from 'cors'

env.config();
const app= express();
app.use (cors())
app.use(express.json({limit:"50mb"}));
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)
app.use('/api/v1/order',orderRoutes)

connection().then(()=>{
    app.listen(process.env.PORT, () =>{
        console.log(`http://localhost:${process.env.PORT}`);
        
    });
}).catch((error)=>{
    console.log(error);
    
});