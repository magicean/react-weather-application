import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");
  function tempToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function tempToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function fahrenheit() {
    return Math.round(Math.round(props.celsius) * 1.8 + 32);
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>

        <span className="switch-field">
          <input
            type="radio"
            name="switch-one"
            value="celsius"
            onClick="tempToCelsius()"
            checked
          />
          <label for="radio-one">C°</label>
          <input
            type="radio"
            name="switch-one"
            value="fahrenheit"
            onClick={tempToFahrenheit}
          />
          <label for="radio-two">F°</label>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{fahrenheit()}</span>

        <span className="switch-field">
          <input
            type="radio"
            name="switch-one"
            value="celsius"
            onClick={tempToCelsius}
            checked
          />
          <label for="radio-one">C°</label>
          <input
            type="radio"
            name="switch-one"
            value="fahrenheit"
            onClick={tempToFahrenheit}
          />
          <label for="radio-two">F°</label>
        </span>
      </div>
    );
  }
}
