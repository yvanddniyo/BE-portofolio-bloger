const express =  require('express');
const mongoose = require('mongoose')
const routes = require("./routes/blogerRoute")
<<<<<<< HEAD
 require('dotenv').config();




=======
const userRoute = require("./routes/user")
 require('dotenv').config();

>>>>>>> main
// connect to the mongoDB

mongoose
.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
<<<<<<< HEAD
    console.log('Successfully connect to the server')

/*new routes*/
const app = express();
app.use(express.json())
app.use('/api', routes);
=======

/*new routes*/
const app = express();
app.use(express.json());
app.use('/api', routes);
app.use('/api', userRoute);
>>>>>>> main

app.listen(5000, () => {
    console.log("Server has started");
})
})