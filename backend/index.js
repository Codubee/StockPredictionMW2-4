const express = require('express');
const app = express();
const axios = require('axios');

require('dotenv').config();
app.use(express.json())

const port = process.env.PORT || 8080;

const finnhub = require('finnhub');
const finnhub_api_key = finnhub.ApiClient.instance.authentications['api_key'];
finnhub_api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

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

//Weather
app.get('/weather', (req, res) => {
    const weather_api_key = process.env.WEATHER_API_KEY;
    const language = 'en';
    const units = 'I';

    axios.get(`http://api.weatherbit.io/v2.0/current?postal_code=75034&key=${weather_api_key}&language=${language}&units=${units}`)    
    .then(function (response) {       
        console.log(response.data);       
        res.status(200).json(response.data); })
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"An error occurred"}); })
});



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
