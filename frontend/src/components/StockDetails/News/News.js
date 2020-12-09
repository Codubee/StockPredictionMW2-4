import React from 'react'
import Prediction from '../Prediction/Prediction'

export default class News extends React.Component{
    constructor(props){
        super(props)
        this.state = { companyName:props.companyName}
    }

    componentDidMount(){
        //here we call the api that gets the company news
        // fetch("/getStockPrice",{
        //     method: 'POST', 
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        //   })
        //     .then(res => res.json())
        //     .then(data => {

        //         this.setState({ lat: data.lat, lng: data.lng, }
        //             ,() => this.props.parentData(this.state))
        //         console.log(data);
        //     })
        //     .catch(console.log)
    }

    render(){
        return(
            // <Prediction/> here we have to send the company news to the prediction component as props
            <h1>News is: {this.state.companyName}</h1>
        )
    }
}
