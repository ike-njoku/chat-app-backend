import { fstat } from "fs";
import mongoose from "mongoose";
import { logError } from "./logger";

export const connectDB = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/chat-app')  
    .then(() => {
      console.log('Connected to MONGODB')
    })

    .catch((error) => {
      console.log(error);
      logError(error)
    }) 
} 