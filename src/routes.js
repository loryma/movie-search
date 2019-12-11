import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import MoviePage from "./pages/MoviePage";

export const routes = (
  <Switch>
    <Route exact path="/movies/:id" component={MoviePage} />
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);
