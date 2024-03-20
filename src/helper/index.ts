// interface Blog {
//     title: string;
//     description: string;
//     image: string;
//   }
  
  
//   export { Blog };
// import image from 

import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv'

dotenv.config()


          
          
        cloudinary.config({ 
          cloud_name: 'drzvjud14', 
          api_key: '945745253876598', 
          api_secret: 'YTV6DbQQ8P5Sx1Yuj7dgLyqFhNM' 
        });
   


const image = 'https://st4.depositphotos.com/1662991/31353/i/450/depositphotos_313539636-stock-photo-handsome-young-male-software-developer.jpg';

const run = () => {
    cloudinary.uploader.upload(image).then(result => {
        console.log(result);
    }).catch(error => {
        console.error('Error uploading image:', error);
    });
};

run();
