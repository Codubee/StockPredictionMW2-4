import React from 'react';
import './Weather.css'

const weatherData = {
    city: "Allen" + " ",
    temperature: "65" + '\xB0F ',
    picture: "/partly cloudy.png"
};

class Weather extends React.Component {
    render() {
        return(
            <span>
               <b>{weatherData.city}</b>
               {weatherData.temperature}
               <img className= "medium-icon" src = {weatherData.picture} />
            </span>
        );
    }

}

export default Weather;