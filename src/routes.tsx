import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home/home";
import Layout from "./HOCs/layout";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <BrowserRouter>
            <Route exact path="/" component={Home}/>
          </BrowserRouter>
        </Switch>
      </Layout>
    );
  }
}
export default Routes;
