import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details:name" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
