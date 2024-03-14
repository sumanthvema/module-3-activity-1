const express = require('express');
const bodyParser = require('body-parser');
const { makeupperCase } = require('./middlewares');
const studentsRouter = require("./controllers/students");

const app = express();

app.use (bodyParser.json());// using the middleware body-parser to parse the body of the request
app.use(makeupperCase) // global middle ware

app.use('/students', studentsRouter); // use studentsRouter

app.use('/', function(req,res,next) {
    console.log('Request url:' + req.url);
    res.send('Hello');
})

const mongoose = require('mongoose');
const uri = "mongodb+srv://sumanthvema1234:YmInlQ6qMhazRcki@cluster1.r98ubop.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,
{
useNewUrlParser: true,
useunifiedTopology: true
});

app.listen(3000, ()=> {
    console. log('Server is running on port 3000');
});