import React, { Component } from "react";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Components/Nav-bar/navbar";
import Tourlist from "./Components/tourlist";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Tourlist></Tourlist>
      </React.Fragment>
    );
  }
}
