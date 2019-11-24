import React from "react";
import "./App.css";
import { CityWrapper } from "./components/CityWrapper";
import * as firebase from "firebase";
//import * as firebaseui from "firebaseui";

/*const firebaseConfig = {
  apiKey: "AIzaSyDd3RhpSr-I-DfNfZLg0warbZ1JchQiWUA",
  authDomain: "weatherapp-5c23d.firebaseapp.com",
  databaseURL: "https://weatherapp-5c23d.firebaseio.com",
  projectId: "weatherapp-5c23d",
  storageBucket: "weatherapp-5c23d.appspot.com",
  messagingSenderId: "1095925718277",
  appId: "1:1095925718277:web:7d6856132dd8f6e1386b6c",
  measurementId: "G-HBPVYDV8W9"
};*/


export default class App extends React.Component{
  render(){
    return (
      <section className="app">
        <header></header>
        <main>
          <CityWrapper />
          <div id="firebaseui-auth-container"></div>
        </main>
      </section>
    );
  }
}

