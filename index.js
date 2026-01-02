import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";


dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: "http://localhost:5173"|| "*",
    credentials: true  
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/contacts", contactRoutes);
app.use("/api/auth", authRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));
