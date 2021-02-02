import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import CreateExercise from "./components/create-exercise.component";
import FirstTimer from "./components/firsttimer";
import MyList from "./components/mylist";
import "./App.css";
import ReactGA from "react-ga";
import MetaTags from "react-meta-tags";
ReactGA.initialize("UA-188241761-1");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_list: "",
      title: "Untitled Lesson",
    };
  }
  componentDidMount() {
    localStorage.setItem("title", this.state.title);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <MetaTags>
            <meta
              name="description"
              content="Ski instructors; plan your ski lessons with the ski lesson planner."
            />
            <meta property="og:title" content="Ski Lesson Planner" />
            <meta property="og:image" content="components/images/ski.svg" />
          </MetaTags>
          <Navbar />
          <br />
          <Route path="/" exact component={CreateExercise} />
          <Route
            path="/mylist"
            exact
            component={(props) => <MyList {...props} />}
          />
          <Route path="/firsttimer" exact component={FirstTimer} />
        </div>
      </Router>
    );
  }
}
