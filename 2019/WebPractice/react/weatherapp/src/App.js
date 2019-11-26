import React from "react";
import "./App.css";
import { route } from "./components/shared/routing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return <React.Fragment>{route}</React.Fragment>;
  }
}
