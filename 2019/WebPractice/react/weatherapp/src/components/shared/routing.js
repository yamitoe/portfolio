import React from "react";
import { homepage } from "./homepage";
import { Switch, Route } from "react-router-dom";
import { CityWrapper } from "../module-weather/components/CityWrapper";

export let route = (
  <Switch>
    <Route exact path="/">
      {homepage}
    </Route>
    <Route path="/weatherapp">
      <CityWrapper />
    </Route>
  </Switch>
);
