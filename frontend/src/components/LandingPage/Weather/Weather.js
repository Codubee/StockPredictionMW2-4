import React from 'react';
import './Weather.css'

const weatherData = {
    city: "Allen ",
    temperature: "65\xB0F ",
    picture: "/partly_cloudy.png"
};


function Weather() {
        const { city, temperature, picture } = weatherData;
        return(
            <span>
               <b>{city}</b>
               {temperature}
               <img className="medium-icon" src={picture} alt="weather"/>
            </span>
        );
}

export default Weather;