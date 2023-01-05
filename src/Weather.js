import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  let unit = "metric";

  function updateInformation(response) {
    console.log(response);

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      description: "Clouds",
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "2b99915330dc99299d86e98273a6a560";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(updateInformation);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-11">
            <form className="input-group" onSubmit={handleSubmit}>
              <input
                type="search"
                className="form-control border-0 shadow-sm rounded"
                placeHolder="Enter a City"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <span className="input-group-btn">
                <button className="btn btn-default search-icon" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </span>
            </form>
          </div>
          <div className="col-1">
            <button className="btn current-location-button">
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
