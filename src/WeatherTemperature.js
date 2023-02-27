import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  const [temperature, setTemperature] = useState(props.celsius);

  const handleCelsiusChange = (event) => {
    setTemperature(props.celsius);
    console.log(props.celsius);
    setUnit("celsius");
  };

  const handleFahrenheitChange = (event) => {
    setTemperature(Math.round(Math.round(props.celsius) * 1.8 + 32));

    console.log(props.celsius);
    setUnit("fahrenheit");
  };

  return (
    <div className="row">
      <div className="col-5">
        <span className="temperature">{`${temperature}`}</span>
      </div>
      <div className="col-2">
        <span className="switch-field">
          <input
            type="radio"
            id="radio-one"
            name="switch-one"
            value="celsius"
            onChange={handleCelsiusChange}
            checked={unit === "celsius"}
          />
          <label htmlFor="radio-one">C°</label>
          <input
            type="radio"
            id="radio-two"
            name="switch-one"
            value="fahrenheit"
            onChange={handleFahrenheitChange}
            checked={unit === "fahrenheit"}
          />
          <label htmlFor="radio-two">F°</label>
        </span>
      </div>
    </div>
  );
}
