import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Initialize Cloudinary with your configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploads = (file: any, folder: any) => {
    return new Promise(resolve => {
        const options:any= {
            resource_type: "auto", // Add resource_type property explicitly
            folder: folder
        };

        cloudinary.uploader.upload(file, (result: any) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, options);
    });
}
