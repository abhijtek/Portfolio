import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })



export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DataBase connected")
    } catch (error) {
         console.error(error);
         process.exit(1);     
    }
}