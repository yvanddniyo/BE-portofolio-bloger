const express =  require('express');
const connectDB = require("./src/config/db")
const app = express();
const router =require("./src/routes/blogerRoute")

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
