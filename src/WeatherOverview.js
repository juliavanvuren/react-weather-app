import React from "react";
import FormattedDate from './FormattedDate';
import WeatherTemperature from "./WeatherTemperature";
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
  
  <span className="float-left">
  <WeatherIcon code={props.data.icon} />
  </span>
  <span className="float-left">
    <WeatherTemperature celsius={props.data.temperature} />
    </span>
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