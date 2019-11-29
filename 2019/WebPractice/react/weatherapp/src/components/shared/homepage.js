import React from "react";
import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <section className="container-home">
      {document.body.setAttribute("backColor", "home")}
      <header></header>
      <main>
        <div>
          Hello! this is my personnal homepage where you will find some projects
          I have worked on.
        </div>
        <section className="projects">
          <h3>Projects</h3>
          <article>
            <Link to="/weatherapp" className="weather">
              Weather App
            </Link>
            <div>Give it a city and it will get you the weather</div>
            <div className="details">
              Enter a city in the autocomplete, if it is a valid city it will
              use fetch api to get the corresponding data.
            </div>
          </article>
          <div className="github">
            <span>You can checkout other projects here: </span>
            <a href="https://github.com/yamitoe/portfolio">Github</a>
          </div>
        </section>
        <section className="skills">
          <div>My current skillset includes:</div>
          <ul>
            <li>Javascript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Reactjs</li>
            <li>PHP</li>
            <li>Git</li>
            <li>SQL</li>
          </ul>
        </section>
      </main>
      <footer></footer>
    </section>
  );
}
