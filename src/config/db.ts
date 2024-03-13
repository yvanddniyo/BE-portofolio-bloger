// const mongoose = require('mongoose')
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
    
      try {
        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) {
            throw new Error("MongoDB connection string is not provided");
        }

        await mongoose.connect(mongoUrl, {
          // useNewUrlParser: true,
          // useUnifiedTopology: true,
        });
      
      console.log('Successfully connected to the database');
      }
     catch (error) {
      if (error instanceof Error) {
        console.error('Error connecting to the database:', error.message);
    } else {
        console.error('An unknown error occurred while connecting to the database');
    }
    }
  }

  
 export default connectDB;
  