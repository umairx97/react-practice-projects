import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'; 
import Login from './Login/Login';
export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path = "/" component = {Login}></Route>
      </BrowserRouter>
    )
  }
}
