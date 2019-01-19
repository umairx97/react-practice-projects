import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      Home Component{" "}
      <button
        onClick={() =>
          props.history.push({
            pathname: "/contact-us/1234",
            state: { name: "hello" }
          })
        }
      >
        Click me
      </button>
    </div>
  );
};

const Contact = props => {
  console.log(props);
  return <div>Contact Component</div>;
};

const Landing = () => {
  return <div>Landing Page</div>;
};

const NavBar = () => {
  return (
    <div>
      <Link to="/">Landing Page</Link>
      <Link to="/home">Home</Link>
      <Link to="/contact-us">Contact Us</Link>
    </div>
  );
};

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact-us" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
