const mongoose = require('mongoose')

require('dotenv').config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Successfully connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error.message);
      process.exit(1); // Exit process with failure
    }
  };
  
  module.exports = connectDB;
  