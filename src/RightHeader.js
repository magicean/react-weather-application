import React from "react";
import "./RightHeader.css";

export default function RightHeader() {
  let weatherData = {
    feelsLike: 14,
    humidity: 49,
    wind: 7
  };
  return (
    <div className="RightHeader">
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
  );
}
