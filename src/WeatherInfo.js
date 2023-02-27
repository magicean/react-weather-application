import React from "react";
import FormatDate from "./FormatDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <span className="city">{props.data.city}</span>
          <h3 className="text">
            <FormatDate date={props.data.date} />
          </h3>
          <h3 className="text">{props.data.description}</h3>
          <div className="row">
            <div className="col-3 mt-3">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-5 mt-3">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4 mt-5">
          <ul className="attributes">
            <li>
              <h3 className="attributes-text">
                Feels-like: {props.data.feelsLike}°
                <span className="attributes-value"></span>
              </h3>
            </li>

            <li>
              <h3 className="attributes-text">
                Humidity: {props.data.humidity}%
                <span className="attributes-value"></span>
              </h3>
            </li>
            <li>
              <h3 className="attributes-text">
                Wind: {props.data.wind} km/h
                <span className="attributes-value"></span>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
