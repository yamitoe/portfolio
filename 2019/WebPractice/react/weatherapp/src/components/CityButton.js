import React from "react";
import { CityItem } from "./CityItem";
import plus from "../images/plus.png";

export class CityButton extends React.Component {
  render() {
    return (
      <section className="container-buttoncity">
        <header>
          <h3>Add City</h3>
            <button onClick={this.props.modalDisplay}>
              <img src={plus} alt="addItem"/>
            </button>
        </header>
        <footer></footer>
      </section>
    );
  }
}
