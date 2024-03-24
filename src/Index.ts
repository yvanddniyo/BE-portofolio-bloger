import express from 'express'
import connectDB from "./config/db"
// import hfhfhf from "../../Blogger/src/routes/*.ts"
const app = express();
import router from "./routes/blogerRoute"
import routerComment from './routes/commentRoute';
import routerQuery from './routes/queryRoute';
import routerUser from './routes/userRoute';
import routerAuth from './routes/authRouter';

import routerLikes from './routes/likeRouter';


const PORT = process.env.PORT || 5000;


import upload from './helper/multer';
import cloudinary from 'cloudinary';
import fs from 'fs'

import bodyParser from 'body-parser';   
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";





const options: swaggerJsdoc.Options ={
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'REST API OF BLOG',
            version: '1.0.0'
        }, 
        securitySchemes: {
            headerAuth: {
              type: 'apiKey',
              in: 'header',
              name: 'auth-token',
            },
        },
        servers: [
            {
                url: 'http://localhost:5000'
            },
            {
                url: 'https://be-portofolio-bloger.onrender.com'
            },
        ], 
         
    },

    apis: [`${__dirname}/routes/*.js`]
}

const swaggerSpec = swaggerJsdoc(options);



connectDB()

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*new routes*/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1', router)
app.use('/api/v1', routerComment)
app.use('/api/v1', routerQuery)
app.use('/api/v1', routerUser)
app.use('/api/v1', routerAuth)
app.use('/api/v1', routerLikes)




// requesting image


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})