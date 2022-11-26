import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Header(props) {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let unit = "metric";
  let weatherData = {
    feelsLike: 14,
    humidity: 49,
    wind: 7,
    date: "Tuesday, 8:24 p.m.",
    description: "Clouds",
    iconURL: "http://openweathermap.org/img/wn/02d@2x.png",
  };

  function updateInformation(response) {
    setCity(response.data.name);
    setTemp(Math.round(response.data.main.temp));
    console.log(response);
  }

  let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(updateInformation);

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-8">
          <span className="city">{city}</span>
          <h3 className="text">{weatherData.date}</h3>
          <h3 className="text">{weatherData.description}</h3>
          <div className="row">
            <div className="col-3">
              <img
                src={weatherData.iconURL}
                alt="{weatherData.description}"
                className="icon"
              />
            </div>
            <div className="col-2">
              <span className="temperature">{temp}</span>
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
        <div className="col-4">
          <ul className="attributes">
            <li>
              <h3 className="attributes-text">
                Feels-like: {weatherData.feelsLike}°
                <span className="attributes-value"></span>
              </h3>
            </li>

            <li>
              <h3 className="attributes-text">
                Humidity: {weatherData.humidity}%
                <span className="attributes-value"></span>
              </h3>
            </li>
            <li>
              <h3 className="attributes-text">
                Wind: {weatherData.wind} km/h
                <span className="attributes-value"></span>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
