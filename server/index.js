import express from "express";
import connectDB from "./db/connectDb.js";
import cors from "cors"
import userRoute from "./router/user.route.js"
import productRoute from "./router/product.route.js"
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';




const app=express();

dotenv.config();

app.use(cors({
  origin: "https://inventory-dashboard-backend-dobt.onrender.com",  
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user",userRoute)
app.use("/api/v1/product",productRoute)

app.listen(process.env.PORT,()=>{
    console.log("server is running");
})