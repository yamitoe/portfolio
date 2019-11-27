import React from "react";
import { Link } from "react-router-dom";
export function Homepage() {
  return (
    <section className="app">
      {document.body.setAttribute("backColor", "home")}
      <header></header>
      <main>
        <div>
          Hello! this is my personnal homepage where you will find some projects
          I have worked on.
        </div>
        <h2>Projects</h2>
        <div>
          <Link to="/weatherapp">Weather App</Link>
        </div>
      </main>
    </section>
  );
}
