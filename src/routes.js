import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";

export const routes = (
  <Switch>
    <Route to="/">
      <Home />
    </Route>
  </Switch>
);
