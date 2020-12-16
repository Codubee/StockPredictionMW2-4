const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json())

const port = 8080;

const finnhub = require('finnhub');
const finnhub_api_key = finnhub.ApiClient.instance.authentications['api_key'];
finnhub_api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log('API is up and running')
})

//Quote
app.get('/quote', (req, res) => {
    var company = req.query.company;
    finnhubClient.quote(company, (error, data, response) => {
        if(error) res.status(500).send(error);
        else res.status(200).send(data);
    });
});

module.exports = app;