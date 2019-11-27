import React from "react";
import { Homepage } from "./homepage";
import { Switch, Route } from "react-router-dom";
import { CityWrapper } from "../module-weather/components/CityWrapper";
import "./backColor.scss";

export let route = (
  <Switch>
    <Route exact path="/">
      <Homepage />
    </Route>
    <Route path="/weatherapp">
      <CityWrapper />
    </Route>
  </Switch>
);
