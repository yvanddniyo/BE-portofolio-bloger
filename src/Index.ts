import express from 'express'

// const connectDB = require("./src/config/db")
import connectDB from "./config/db"
const app = express();
import router from "./routes/blogerRoute"

const PORT = process.env.PORT || 5000;

// connect to the mongoDB
connectDB()


// middlewares
app.use(express.json());

/*new routes*/
app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
