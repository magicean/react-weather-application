import React, { useState } from "react";
import "./LeftHeader.css";
import axios from "axios";

export default function LeftHeader(props) {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let unit = "metric";
  function updateInformation(response) {
    setCity(response.data.name);
    setTemp(Math.round(response.data.main.temp));
    console.log(response);
  }

  let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(updateInformation);

  let weatherData = {
    date: "Tuesday, 8:24 p.m.",
    description: "Clouds",
    iconURL: "http://openweathermap.org/img/wn/02d@2x.png",
  };
  return (
    <div className="LeftHeader">
      <span className="weather-text city-name city-text">{city}</span>
      <h3 className="weather-text">{weatherData.date}</h3>
      <h3 className="weather-text">{weatherData.description}</h3>
      <div className="row">
        <div className="col-3">
          <img
            src={weatherData.iconURL}
            alt="{weatherData.description}"
            className="weather-icon"
          />
        </div>
        <div className="col-2">
          <span className="temp weather-text">{temp}</span>
        </div>
        <div className="col-1">
          <span className="switch-field">
            <input
              type="radio"
              name="switch-one"
              value="celsius"
              onclick="tempToCelsius()"
              checked
            />
            <label for="radio-one">C°</label>
            <input
              type="radio"
              name="switch-one"
              value="fahrenheit"
              onclick="tempToFahrenheit();"
            />
            <label for="radio-two">F°</label>
          </span>
        </div>
      </div>
    </div>
  );
}
