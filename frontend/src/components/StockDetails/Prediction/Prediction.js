import React from 'react';
const axios = require('axios');

export default class Prediction extends React.Component{
    constructor(props){
        super(props)
        this.state = { prediction:{}}
    }

    componentDidMount(){
        axios.post('/checkNews', {
            news1: 'Headline 1',
            news2: 'Headline 2'
          })
          .then(res => this.setState({ prediction: res.data }))
          .catch(err => console.log(err.response));
    }

    render(){
        return(
            <h1>Prediction is: {this.state.prediction}</h1>
        )
    }
}
