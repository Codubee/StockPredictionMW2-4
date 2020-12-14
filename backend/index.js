const express = require('express');
const app = express();
const axios = require('axios');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log('API is up and running')
})



app.post()

module.exports = app;