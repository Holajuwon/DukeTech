import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Login from "./login";
import Todo from "./TodoApp";

const Routes = () => (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/book" component={Todo} />
        </Switch>
    </BrowserRouter>
  );
  
export default Routes;
