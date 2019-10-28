import React from "react";
import { CityItem } from "./CityItem";
import { CityButton } from "./CityButton";
import { Modal } from "./Modal";
import "./styleCity.scss";
import {AutoComplete} from "./AutoComplete";

export class CityWrapper extends React.Component {
  state = {modalDisplay:false};

  modalDisplay = ()=>this.setState(state=>({modalDisplay:!state.modalDisplay}));

  onSubmit = e=>{
    e.preventDefault();

  };

  componentDidMount(){
    this.getData();
  }

   getData = async ()=>{
     try{
      //const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2f8dd18e1f11a92f2feaf7c73623413c');
      //const myJson = await response.json();
      //console.log(JSON.stringify(myJson));

        const response = await fetch('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json');
      const myJson = await response.json();
      console.log(JSON.stringify(myJson));
     }
     catch(err){

     }

  }

  render() {
    let x = [1,2,3];
    return (
      <section className="cityWrapper">
        <CityButton modalDisplay={this.modalDisplay} />
        { this.state.modalDisplay &&
        <Modal title="City" modalDisplay={this.modalDisplay} >
          <form onSubmit={this.onSubmit}>
            <label htmlFor="city"></label>
 
          </form>
        </Modal>
        }
        <AutoComplete/>
      </section>
    );
  }
}
