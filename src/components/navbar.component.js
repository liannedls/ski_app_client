import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/ski.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <img src={logo} alt="Slidding on Skis" className="logo-nav" />
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/database" className="nav-link">
                Exercise Database
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/mylist" className="nav-link">
                My Lesson
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/firsttimer" className="nav-link">
                First Timer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
