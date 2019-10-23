import React from "react";
import { CityItem } from "./CityItem";
import { CityButton } from "./CityButton";
import { Modal } from "./Modal";
import "./styleCity.scss";

export class CityWrapper extends React.Component {
  state = {modalDisplay:false};

  modalDisplay = ()=>this.setState(state=>({modalDisplay:!state.modalDisplay}));

  onSubmit = e=>{
    e.preventDefault();

  };

  render() {
    let x = [1,2,3];
    return (
      <section className="cityWrapper">
        <CityButton modalDisplay={this.modalDisplay} />
        { this.state.modalDisplay &&
        <Modal title="City" modalDisplay={this.modalDisplay} >
          <form onSubmit={this.onSubmit}>
            <label htmlFor="city"></label>
            <select name="city">
              {x.map(data=>{
                return <option value={data}>{data}</option>
              })}
            </select>
          </form>
        </Modal>
        }
      </section>
    );
  }
}
