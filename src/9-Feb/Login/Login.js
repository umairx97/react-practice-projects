import React, { Component } from "react";
import Input from "../Input/input";
import "./Login.css";
export default class Login extends Component {
  state = {
    users: [
      { id: 0, name: "admin", pass: "admin" },
      { id: 0, name: "Umair", pass: "Admin" },
      { id: 0, name: "Shahbaz", pass: "Admin" }
    ],

    isAuth: false,
    CurrentUser: null,
    errors: {
      hasError: false,
      errorsObj: {},
      serverError: ""
    },
    name: "",
    pass: ""
  };

  onSubmit = ev => {
    ev.preventDefault();

    const { users, isAuth, name, pass, errors } = this.state;
    var currentUser = users.filter(user => {
      return user.name === name && user.pass === pass;
    });

    console.log(currentUser);



    // This block is not running problem in current user
    if (currentUser.length) {
      localStorage.setItem("Current User", JSON.stringify(currentUser[0]));
      console.log("You logged in ");
    } else {
      errors.serverError = "Wrong Credentials";
      this.setState({
        errors
      });
    }
  };
  render() {
    const { name, errors, pass } = this.state;
    return (
      <div className="login-form-wrapper">
        <form onSubmit={ev => this.onSubmit(ev)}>
          <h2 className="">Login</h2>

          {errors.serverError && <p>{errors.serverError}</p>}
          <Input
            type="text"
            label="Username "
            value={name}
            name="name"
            errors={errors}
            placeholder="Enter your name here"
            id="name"
            onChange={ev =>
              this.setState({
                [ev.target.name]: [ev.target.value]
              })
            }
          />

          <Input
            type="password"
            label="Password "
            value={pass}
            name="pass"
            errors={errors}
            placeholder="Enter your Password here"
            id="pass"
            onChange={ev =>
              this.setState({
                [ev.target.name]: [ev.target.value]
              })
            }
          />

          <Input type="submit" value="Login" name="my-login-btn" id="my-btn" />
        </form>
      </div>
    );
  }
}
