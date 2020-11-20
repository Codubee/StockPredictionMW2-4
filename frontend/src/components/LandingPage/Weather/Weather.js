import React from 'react';

const weatherData = {
    city: "allen",
    temperature: "65"
};

class Weather extends React.Component() {
    render() {
        return(
           <span>
               {weatherData.city}
               {weatherData.temperature}
           </span> 
        );
    }

}