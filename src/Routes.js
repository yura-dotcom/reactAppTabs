import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about' exact>
        <About />
      </Route>
      <Route path='/features' exact>
        <Features />
      </Route>
    </Switch>
  )
}