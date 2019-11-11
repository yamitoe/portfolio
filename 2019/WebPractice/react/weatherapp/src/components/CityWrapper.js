import React from "react";
import { CityItem } from "./CityItem";
import { CityButton } from "./CityButton";
import { Modal } from "./Modal";
import "./styleCity.scss";
import {AutoComplete} from "./AutoComplete";
import shortid from 'shortid';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

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

  //map fetched weather data
  itemArrCond = ()=>{
    return this.state.cityItems.map(({name, main:{temp_min,temp_max,temp},...data})=>{
      let weather = data.weather[0].main.toLowerCase();
      let weatherDesc = data.weather[0].description.toUpperCase();
      let imgArr = ['snow','rain','clouds','thunderstorm','clear','mist'];
      let currWeather = images['clear.png'];
      imgArr.forEach(key=>{
        if(weather === key){
          currWeather = images[`${key}.png`];
        }
      })

     return <CityItem city={name} min={ Math.round(temp_min)} max={Math.round(temp_max)} 
     temp={Math.round(temp)} desc={weatherDesc} img={currWeather} weather={weather}  key={shortid.generate()} />
    }) 
  }



  render() {
    return (
      <section id="cityWrapper">
        <CityButton modalDisplay={this.modalDisplay} />
        {this.itemArrCond()}
        { this.state.modalDisplay &&
        <Modal title="City" modalDisplay={this.modalDisplay} onSubmit={this.onSubmit} >
          <AutoComplete autoCompData={this.autoCompData}/>
        </Modal>
        }
         <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
         </label>
      </section>
    );
  }
}
