const express =  require('express');
const mongoose = require('mongoose')
const app = express();
const routes =require('../Blogger/src/routes/index')

 require('dotenv').config();

// connect to the mongoDB

mongoose
.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log('Successfully connect to the server')

/*new routes*/
app.use(express.json());
app.use('/api', routes);


app.listen(5000, () => {
    console.log("Server has started");
})
})