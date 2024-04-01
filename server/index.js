const express = require('express');
const app = express();

app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const mongoose = require('mongoose');
// const uuid = require('uuid');
// const path = require('path');

app.use('/api', require('./router/userRouter'));

//connecting to mongoDB
mongoose.connect(process.env.MONGO_DB_LOCAL_URL).then((response)=> {
    console.log('Connected to MongoDB Successful............');
}).catch((error)=> {
    console.error(error);
    process.exit(1); // stop the node js process if unable to connect to DB
});

//configure the router with express
app.get('/', (req, res) => {
    res.send(`<h2>Welcome to Express JS with REST API</h2>`);
});

// configure the router with express
// app.use('/api', require('./router/userRouter'));

app.listen(port, hostname, ()=> {
    console.log(`Express server running at http://${hostname}:${port}`);
});