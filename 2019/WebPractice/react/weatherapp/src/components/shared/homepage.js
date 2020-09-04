import React from "react";
import { Link } from "react-router-dom";
import "./homepage.scss";

import fbFav from "./images/facebookuidark2.png";
import tictacFav from "./images/tictactoe.png";
import weatherappFav from "./images/weatherapp.png";

export function Homepage() {
  let displayProject = (url, title, summary, details, img) => {
    return (
      <article>
        <Link to={url}>
          <img src={img} alt={img + "picture"} />
          <h2 className="projectTag">{title} App</h2>
          <div>{summary}</div>
          <div className="details">{details}</div>
        </Link>
      </article>
    );
  };

  return (
    <section className="container-home">
      {document.body.setAttribute("backColor", "home")}
      <main>
        <div>
          Hello! this is my personnal homepage where you will find some projects
          I have worked on.
        </div>
        <section className="container-projects">
          <h3>Projects</h3>
          <section id="projects">
            {displayProject(
              "/facebookui",
              "Facebook UI",
              "Facebook dropdown UI with pagination and theme",
              `Animated dropdown that 'scrolls' left and right. A dark/white theme button, stores the data in cache.
               A simple pagination with material ui and some mock data.`,
              fbFav
            )}
            {displayProject(
              "/weatherapp",
              "Weather",
              "Give it a city and it will get you the weather",
              "Enter a city in the autocomplete, if it is a valid city it will use fetch api to get the corresponding data.",
              weatherappFav
            )}

            {displayProject(
              "/tictac",
              "Tic-Tac-Toe",
              "A simple tic-tac-toe game",
              "React Tutorial Game recreated with Hooks API with minor jest testing",
              tictacFav
            )}
          </section>

          <div className="github">
            <span>You can checkout other projects here: </span>
            <a href="https://github.com/yamitoe/portfolio">Github</a>
          </div>
        </section>
        <section className="skills">
          <div>My current skillset includes:</div>
          <ul>
            <li>Javascript</li>
            <li>Reactjs</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>Material UI</li>
            <li>Git</li>
            <li>Jest</li>
            <li>React Testing Library</li>
            <li>React Router</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
        </section>
        <section className="skills">
          <div>Other Notable Skills: </div>
          <ul>
            <li>Computer Hardware</li>
            <li>AJAX</li>
            <li>XML</li>
            <li>Java</li>
            <li>C#</li>
          </ul>
        </section>
      </main>
      <footer></footer>
    </section>
  );
}
