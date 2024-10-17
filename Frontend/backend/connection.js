
import mongoose from "mongoose";
export default async function connection (){
    console.log(process.env.dbname);
    const  URL=process.env.dburl+process.env.dbname
    console.log(URL);
    const db=await mongoose.connect (URL)
    console.log("database connected");
    return db
   
    
}