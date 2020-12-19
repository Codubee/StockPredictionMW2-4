const express = require('express');
const app = express();
const axios = require('axios');

require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.post('/checkNews', function (req, res) {
    const body = {
        news: req.body
    }

    axios.post('https://codubee-api.herokuapp.com/comprehension',body)
        .then(function (response) {
            console.log(response.data);
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            console.log(error)
            res.status(400).json({error:"An error occurred"});
        })
})

app.listen(port,()=>{
    console.log('API is up and running')
})





module.exports = app;