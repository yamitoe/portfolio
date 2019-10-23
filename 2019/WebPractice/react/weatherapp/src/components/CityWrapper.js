import React from "react";
import { CityItem } from "./CityItem";
import { CityButton } from "./CityButton";
import { Modal } from "./Modal";
import "./styleCity.scss";

export class CityWrapper extends React.Component {
  state = {modalDisplay:false};

  modalDisplay = ()=>this.setState(state=>({modalDisplay:!state.modalDisplay}));

  render() {
    return (
      <section className="cityWrapper">
        <CityButton modalDisplay={this.modalDisplay} />
        { this.state.modalDisplay &&<Modal title="City" modalDisplay={this.modalDisplay} />}
      </section>
    );
  }
}
