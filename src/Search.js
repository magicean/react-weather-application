import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-11">
          <form className="input-group">
            <input
              type="search"
              className="form-control border-0 shadow-sm rounded"
              placeHolder="Enter a City"
              autoComplete="off"
              autoFocus="on"
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
    </div>
  );
}
