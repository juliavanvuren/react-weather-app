import React from 'react';
import "./Weather.css";

export default function Weather(){
  return (
    <div className="weather border">
      <form className='form-control-sm'>
        <input type="search" className="input" placeholder="Enter a city.." autoFocus="on" />
        <input type="submit" value="Search" className="btn btn-primary w-40" />
      </form>
      
     
    <h1>Amsterdam</h1>
        <ul>
          <li>Tuesday 12.00</li>
          <li>Partly cloudy</li>
        </ul>
    <div className="row">
      <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"/><span className='temperature'>18</span><span className='units'>°C</span>
      </div>
      <div className="col-6">
        <ul>
          <li>Feels like: 15°C</li>
          <li>Humidity: 80%</li>
          <li>Windspeed: 11 km/h</li>
        </ul>
      </div>
    </div>
    </div>
  )
};