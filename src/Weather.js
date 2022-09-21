import React, { useState } from 'react';
import axios from 'axios';
import FormattedDate from './FormattedDate';
import "./Weather.css";

export default function Weather(){
  const [ weatherData, setWeatherData ] = useState({loaded : false});
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
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    }
  
   if (weatherData.loaded) {
   return (
    <div className="weather border">
      <form className='form-control-sm'>
        <input type="search" className="input" placeholder="Enter a city.." autoFocus="on" />
        <input type="submit" value="Search" className="btn btn-primary w-40" />
      </form>
      
     
    <h1>{weatherData.city}</h1>
        <ul>
          <li><FormattedDate date={weatherData.date} /></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
    <div className="row">
      <div className="col-6">
        <img src={weatherData.iconUrl} alt={weatherData.description}/><span className='temperature'>{Math.round(weatherData.temperature)}</span><span className='units'>°C</span>
      </div>
      <div className="col-6">
        <ul>
          <li>Feels like: {Math.round(weatherData.feels)}°C</li>
          <li>Humidity: {Math.round(weatherData.humidity)}%</li>
          <li>Windspeed: {Math.round(weatherData.wind)} km/h</li>
        </ul>
      </div>
    </div>
    </div>
  )
   } else {
    const apiKey ="c3895a10923317988546b6bf1fbc2d48"; 
    let city ="New York";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

   }
};