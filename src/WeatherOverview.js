import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

export default function WeatherOverview(props) {
  return (
  <div className="WeatherOverview"><h1>{props.data.city}</h1>
  <ul>
    <li><FormattedDate date={props.data.date} /></li>
    <li className="text-capitalize">{props.data.description}</li>
  </ul>
<div className="row mt-3">
<div className="col-6">
  
  <div className="float-left">
  <WeatherIcon code={props.data.icon} />
  </div>
  <span className='temperature'>{Math.round(props.data.temperature)}</span><span className='units'>°C</span>
</div>

<div className="col-6">
  <ul>
    <li>Feels like: {Math.round(props.data.feels)}°C</li>
    <li>Humidity: {Math.round(props.data.humidity)}%</li>
    <li>Windspeed: {Math.round(props.data.wind)} km/h</li>
  </ul>
</div>
</div>
</div>
  );
}