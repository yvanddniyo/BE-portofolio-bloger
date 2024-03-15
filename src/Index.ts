import express from 'express'

// const connectDB = require("./src/config/db")
import connectDB from "./config/db"
const app = express();
import router from "./routes/blogerRoute"
import routerComment from './routes/commentRoute';
import routerLikes from './routes/likeRouter';
import routerQuery from './routes/queryRoute';
import routerUser from './routes/userRoute';
import routerAuth from './routes/authRouter';
const PORT = process.env.PORT || 5000;

// connect to the mongoDB
connectDB()

// middlewares
app.use(express.json());

/*new routes*/
app.use('/api/v1', router);
app.use('/api/v1', routerComment)
app.use('/api/v1', routerLikes)
app.use('/api/v1', routerQuery)
app.use('/api/v1', routerUser)
app.use('/api/v1', routerAuth)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
