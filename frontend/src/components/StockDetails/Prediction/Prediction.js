import React from 'react'

export default class Prediction extends React.Component{
    constructor(props){
        super(props)
        this.state = { companyNews:props.companyNews}
    }

    componentDidMount(){
        //here we call the comprehend api
        
    }

    render(){
        return(
            <h1>hello world</h1>
        )
    }
}
