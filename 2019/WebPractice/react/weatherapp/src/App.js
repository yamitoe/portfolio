import React from "react";
import "./App.css";
import { route } from "./components/shared/routing";

export default class App extends React.Component {
  render() {
    return <React.Fragment>{route}</React.Fragment>;
  }
}
