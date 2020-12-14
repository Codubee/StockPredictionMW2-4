const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log('API is up and running')
})

app.get('/getNews', (req, res) => {
    var company = req.query.company;
    var today = new Date();
    var weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);

    var from = weekAgo.toISOString().split("T")[0];
    var to = today.toISOString().split("T")[0];
    axios.get(`https://finnhub.io/api/v1/company-news?symbol=${company}&from=${from}&to=${to}&token=${process.env.FINNHUB_TOKEN}`)
        .then(response => {
            res.status(200).json(response.data);
        }).catch((error)=>{
            console.log(error);
            res.status(500).json({error:"Error occurred!"});
        })
})

module.exports = app;