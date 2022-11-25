import React from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

export default function Header() {
  return (
    <div className="weather-app-main">
      <div className="row">
        <div className="col-8">
          <LeftHeader city="Montreal" />
        </div>
        <div className="col-4">
          <RightHeader />
        </div>
      </div>
    </div>
  );
}
