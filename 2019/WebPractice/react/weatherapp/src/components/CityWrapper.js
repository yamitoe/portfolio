import React from "react";
import { CityItem } from "./CityItem";
import { CityButton } from "./CityButton";
import { Modal } from "./Modal";
import "./styleCity.scss";

export class CityWrapper extends React.Component {
  render() {
    return (
      <section className="cityWrapper">
        <CityButton />
        <Modal title="city" />
      </section>
    );
  }
}
