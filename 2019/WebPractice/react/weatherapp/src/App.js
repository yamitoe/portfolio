import React from "react";
import "./App.css";
import { route } from "./components/shared/routing";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to="./" id="home">
          Home
        </Link>
        {route}
      </React.Fragment>
    );
  }
}
