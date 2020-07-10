import React from "react";
import "./toggleswitch.css";

export function ToggleSwitch(props) {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}
