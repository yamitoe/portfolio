import React from "react";
import { CityItem } from "./CityItem";
import imgcitys from "../images/citys.png";

export class CityButton extends React.Component {
  render() {
    return (
      <section className="container-buttoncity">
        <h2>Add City</h2>
        <figure>
          <input type="image" src="" alt="addItem" />
        </figure>
      </section>
    );
  }
}
