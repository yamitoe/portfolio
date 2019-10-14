import React from "react";
import { CityItem } from "./CityItem";
import { ButtonCity } from "./ButtonCity";
import "./styleCity.scss";

export class CityWrapper extends React.Component {
  render() {
    return (
      <section className="cityWrapper">
        <ButtonCity />
      </section>
    );
  }
}
