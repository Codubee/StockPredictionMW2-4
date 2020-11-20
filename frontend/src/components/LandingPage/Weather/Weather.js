import React from 'react';
import WeatherForm from './WeatherForm.js';

class Weather extends React.Component {
    // weather method to call api
    getWeather = async (e) => {

        state = {
            city: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        }
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await get('insert api url + ${key}');
        const data = await api_call.json();
        console.log(data);

        this.setState({
            temperature: 
            city: 
            
        });
    }
    
    render(){
        return (
            <WeatherForm getWeather={this.getWeather}/>
        );
    }
}

export default Weather;