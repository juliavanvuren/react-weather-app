import React from "react";

export default function FormattedDate(props) {
console.log(props.date);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturdaty"];

let hours = props.date.getHours();
let minutes = props.date.getMinutes();

 return ( 
  <div>
   {hours}:{minutes}
  </div>
)
}