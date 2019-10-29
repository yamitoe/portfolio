import React from "react";
import { CityItem } from "./CityItem";
import { CityButton } from "./CityButton";
import { Modal } from "./Modal";
import "./styleCity.scss";
import {AutoComplete} from "./AutoComplete";
import {shortid} from 'shortid';

export class CityWrapper extends React.Component {
  state = {modalDisplay:false,
    autoCompData:'',
    cityItems: []
  };

  modalDisplay = ()=>this.setState(state=>({modalDisplay:!state.modalDisplay}));
  //Modal data
  onSubmit = async ()=>{
    let cityname = this.state.autoCompData;
    try{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=2f8dd18e1f11a92f2feaf7c73623413c`);
      const weatherData = await response.json();
      //console.log(JSON.stringify(myJson));
      this.setState(state=>{
        return {cityItems:state.cityItems.concat([weatherData]) }
      }
      );
     }
     catch(err){

     }
  };
  //Autocomplete data
  autoCompData= (data)=>{
    this.setState({autoCompData: data});
  }

  componentDidMount(){
    
  }

  getData = async cityname=>{
     try{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=2f8dd18e1f11a92f2feaf7c73623413c`);
      const myJson = await response.json();
      //console.log(JSON.stringify(myJson));
     }
     catch(err){

     }

  }

 

  render() {
    console.log(JSON.stringify(this.state));
    return (
      <section className="cityWrapper">
        <CityItem city="a"/>
        <CityButton modalDisplay={this.modalDisplay} />
        {this.state.cityItems.map(({name,temp_min,temp_max})=>{
         return <CityItem city={name} />
        })}
        { this.state.modalDisplay &&
        <Modal title="City" modalDisplay={this.modalDisplay} onSubmit={this.onSubmit} >
          <AutoComplete autoCompData={this.autoCompData}/>
        </Modal>
        }
      </section>
    );
  }
}
