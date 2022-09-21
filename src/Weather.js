import React, { useState } from 'react';
import axios from 'axios';
import "./Weather.css";
import WeatherOverview from './WeatherOverview';

export default function Weather(props){
  const [ weatherData, setWeatherData ] = useState({loaded : false});
  const [ city, setCity ] = useState(props.defaultCity);
    function handleResponse(response) {
      console.log(response.data);
        setWeatherData({
          loaded: true,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          date: (response.data.dt * 1000),
          city: response.data.name,
          feels: response.data.main.feels_like,
          description: response.data.weather[0].description,
          iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    }
  
    function search() {
      const apiKey ="c3895a10923317988546b6bf1fbc2d48"; 
        let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
         axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleCityChange(event) {
      setCity(event.target.value);
    }

   if (weatherData.loaded) {
   return (
    <div className="weather border">
      <form onSubmit={handleSubmit} className='form-control-sm'>
        <input type="search" className="input" onChange={handleCityChange} placeholder="Enter a city.." autoFocus="on" />
        <input type="submit" value="Search" className="btn btn-primary w-40" />
      </form>

    <WeatherOverview data={weatherData} />  
    </div>
   )
   } else {
    search();
    return (
    "Loading..."
    );
   }
};