import express from "express";
import projectRoutes from "./routes/projectRoutes.js"
import chatRoutes from "./routes/chatRoutes.js"

import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects",projectRoutes);
app.use("/api/chat",chatRoutes);
app.get("/",(req,res)=>{
    res.send("Portfolio Backend Running")
})
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`App listen on http://localhost:${PORT}`);
})