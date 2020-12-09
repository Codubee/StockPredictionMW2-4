import React from 'react'

export default class Prediction extends React.Component{
    constructor(props){
        super(props)
        this.state = { companyNews:props.companyNews}
    }

    componentDidMount(){
        //here we call the comprehend api
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
            <h1>hello world</h1>
        )
    }
}
