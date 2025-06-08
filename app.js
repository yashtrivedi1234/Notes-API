import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";
import Notes from "./Routes/notes.js";
import cors from "cors";

dotenv.config();
const app = express();
connectDb();
export default app;

// Enable CORS for all origins
app.use(cors());
// Enable JSON parsing
app.use(express.json());

app.use("/api/notes", Notes);
