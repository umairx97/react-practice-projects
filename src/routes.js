import React, { Component } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

const Home = () => {
  return <div>Home Component</div>;
};

const Contact = () => {
  return <div>Contact Component</div>;
};

const Landing = () => {
  return <div>Landing Page</div>;
};

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact-us" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
