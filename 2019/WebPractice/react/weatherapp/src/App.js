import React from "react";
import "./App.css";
import { CityWrapper } from "./module-weather/components/CityWrapper";

export default class App extends React.Component {
  render() {
    return (
      <section className="app">
        <header></header>
        <main>
          <CityWrapper />
        </main>
      </section>
    );
  }
}
