import React from 'react'
import Prediction from '../Prediction/Prediction'

export default class News extends React.Component{
    constructor(props){
        super(props)
        this.state = { companyName:props.companyName}
    }

    componentDidMount(){
        //here we call the news api that gets us the company news
        
    }

    render(){
        return(
            // <Prediction/> here we have to send the company news to the prediction component as props
            <h1>{this.state.companyName}</h1>
        )
    }
}
