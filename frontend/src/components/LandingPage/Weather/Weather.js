import React from 'react';
import './Weather.css'
import axios from 'axios'


class Weather extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            city:'',
            lat:'',
            long:'',
            postal:'',
            temp:'',
            img:''
        }
    }
    componentDidMount(){
        axios.get("https://geolocation-db.com/json/")
            .then((response)=> {
                this.setState({
                    city:response.data.city,
                    lat:response.data.latitude,
                    long:response.data.longitude,
                    postal:response.data.postal
                })
                this.getWeather()
            })
    }
    getWeather(){
        axios.get('/weather?zipcode=')
        .then((response)=>{
            console.log(response.data.data[0]);
            this.setState({
                temp:response.data.data[0].temp,
                img:response.data.data[0].weather.icon
            })
        })
    }
    render() {
        return (
            <span>
                <b>{this.state.city}</b>
                {this.state.temp}
                {<img className="medium-icon" src={this.state.img} alt="weather" />}
            </span>
        );
    }
}
export default Weather;