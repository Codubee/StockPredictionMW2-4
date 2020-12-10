import React from 'react';
import './Weather.css'

const weatherData = {
    city: "Allen" + " ",
    temperature: "65" + '\xB0F ',
    picture: "/partly cloudy.png"
};


function Weather() {
        const { city, temperature, picture } = weatherData;
        return(
            <span>
               <b>{city}</b>
               {temperature}
               <img className="medium-icon" src={picture} />
            </span>
        );
}

export default Weather;