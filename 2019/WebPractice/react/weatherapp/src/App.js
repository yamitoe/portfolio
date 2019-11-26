import React from "react";
import "./App.css";
import { CityWrapper } from "./module-weather/components/CityWrapper";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <section className="app">
        <header></header>
        <main>
          <div>
            Hello! this is my personnal homepage where you will find some
            projects I have worked on
          </div>
          <h2>Projects</h2>
          <div>
            <CityWrapper />
          </div>
        </main>
      </section>
    );
  }
}
