import React from "react";
import { Link } from "react-router-dom";

let root = (document.body.style.backgroundColor = "white");
//root.setAttribute('backColor','home');
console.log("t");
export let homepage = (
  <section className="app">
    <header></header>
    <main>
      <div>
        Hello! this is my personnal homepage where you will find some projects I
        have worked on.
      </div>
      <h2>Projects</h2>
      <div>
        <Link to="/weatherapp">Weather App</Link>
      </div>
    </main>
  </section>
);
