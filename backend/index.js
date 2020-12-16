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