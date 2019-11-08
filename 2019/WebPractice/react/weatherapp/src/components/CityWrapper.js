import React from "react";
import { CityItem } from "./CityItem";
import { CityButton } from "./CityButton";
import { Modal } from "./Modal";
import "./styleCity.scss";
import {AutoComplete} from "./AutoComplete";
import shortid from 'shortid';

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
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=2f8dd18e1f11a92f2feaf7c73623413c&units=metric`);
      if(response.status !== 200){
        throw new Error("Invalid City");
      }
      const weatherData = await response.json();
      this.setState(state=>{
        return {cityItems:state.cityItems.concat([weatherData]) }
      }
      )
     }
     catch(err){
      alert(err)
     }
  };
  //Autocomplete data
  autoCompData= (data)=>{
    this.setState({autoCompData: data});
  }

  itemArrCond = ()=>{
    console.log(this.state.cityItems);
    return this.state.cityItems.length > 0 ?
    this.state.cityItems.map(({name, main:{temp_min,temp_max,temp},...data})=>{
      let weather = data.weather[0].main.toLowerCase();
      let imgArr = ['snow','rain','sunny','clouds','clear'];
      console.log(weather);
     return <CityItem city={name} min={temp_min} max={temp_max} temp={temp}  key={shortid.generate()} />
    }) 
    : false;
  }



  render() {
    return (
      <section className="cityWrapper">
        <CityButton modalDisplay={this.modalDisplay} />
        {this.itemArrCond()}
      
        { this.state.modalDisplay &&
        <Modal title="City" modalDisplay={this.modalDisplay} onSubmit={this.onSubmit} >
          <AutoComplete autoCompData={this.autoCompData}/>
        </Modal>
        }
      </section>
    );
  }
}
