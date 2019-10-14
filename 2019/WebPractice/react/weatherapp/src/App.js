import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CityWrapper } from "./components/CityWrapper";

function App() {
  return (
    <section className="app">
      <header></header>
      <main>
        <CityWrapper />
      </main>
    </section>
  );
}

export default App;
