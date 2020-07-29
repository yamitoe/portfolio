import React from "react";
import "./toggleswitch.css";

export function ToggleSwitch(props) {
  return (
    <label className="switch">
      <input type="checkbox" defaultChecked={props.checked} />
      <span className="slider round" onClick={props.onClick}></span>
    </label>
  );
}
