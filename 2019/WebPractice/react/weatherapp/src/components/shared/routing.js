import React from "react";
import { Homepage } from "./homepage";
import { Switch, Route } from "react-router-dom";
import { CityWrapper } from "../module-weather/components/CityWrapper";
import App from "../module-tictac/App";
import { App as Facebookui } from "../module-facebookui/App";
import "./backColor.scss";

export let route = (
  <Switch>
    <Route exact path="/">
      <Homepage />
    </Route>
    <Route path="/weatherapp">
      <CityWrapper />
    </Route>
    <Route path="/tictac">
      <App />
    </Route>
    <Route path="/facebookui">
      <Facebookui />
    </Route>
  </Switch>
);
