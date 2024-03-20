// import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from 'express';
import cloudinary from "./index";

import dotenv from "dotenv";

dotenv.config();

// Initialize Cloudinary with your configuration

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadFile = async (file: Express.Multer.File, res: Response) => {
//     try {
//       const upload = await cloudinary.uploader.upload(file.path);
//       return upload.secure_url;
//     } catch(error){
//       return res.status(500).send(error);
//     }
// };


// export default uploadFile;

// import { Request, Response } from 'express';
// import cloudinary from 'cloudinary';


const uploadFile = async (file: any) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: 'auto',
      folder: 'assets', // Specify the folder name where you want to store the uploaded images
    });
    return result.secure_url; // Return the secure URL of the uploaded image
  } catch (error) {
    console.error('Error uploading file to Cloudinary:', error);
    throw error;
  }
};

export default uploadFile;














