const express =  require('express');
const mongoose = require('mongoose')
const routes = require("./routes/blogerRoute")
const userRoute = require("./routes/user")
 require('dotenv').config();

// connect to the mongoDB

mongoose
.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {

/*new routes*/
const app = express();
app.use(express.json());
app.use('/api', routes);
app.use('/api', userRoute);

app.listen(5000, () => {
    console.log("Server has started");
})
})