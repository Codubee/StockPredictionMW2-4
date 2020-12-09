import React from 'react'
import News from './News/News'
import Price from './Price/Price'

export default class StockDetails extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            companyName:this.props.match.params.companyName
        }
    }

    componentDidMount(){
        
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
            <div class="container text-center">
                 <h3>ID: {this.state.companyName}</h3>
                 <News companyName={this.state.companyName}/>
                 <Price companyName={this.state.companyName}/>
            </div>

        )
    }
}