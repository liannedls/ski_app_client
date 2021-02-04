import React, { Component } from "react";
import axios from "axios";
//import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col } from "reactstrap";
import ExerciseList from "./exercise-list.component.js";
import ReactGA from "react-ga";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
    this.onChangeGroup = this.onChangeGroup.bind(this);
    this.onChangeSkill = this.onChangeSkill.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeExercisenum = this.onChangeExercisenum.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadAll = this.loadAll.bind(this);
    this.loadSearch = this.loadSearch.bind(this);
    this.state = {
      groups: ["Group", "Private"],
      skills: ["Beginner", "Intermediate", "Advanced"],
      ages: ["Adult", "Children", "Any"],
      exercisenums: [1, 2, 3, 4, 5],
      exercises: [
        {
          name: "Loading",
          description: "Loading",
          group: "Loading",
          age: "Loading",
          skill: "Loading",
        },
      ],
      group: "Group",
      skill: "Beginner",
      age: "Any",
      num: 5,
      textVal: "",
    };
  }
  handler() {
    this.setState({
      someVar: "some value",
    });
    this.componentDidMount();
  }
  onChangeGroup(e) {
    this.setState({
      group: e.target.value,
    });
  }

  onChangeSkill(e) {
    this.setState({
      skill: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeExercisenum(e) {
    this.setState({
      num: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .get("https://frozen-stream-11960.herokuapp.com/exercises/", {
        params: {
          group: this.state.group,
          age: this.state.age,
          skill: this.state.skill,
          num: this.state.num,
        },
      })
      //axios.get('http://localhost:5000/exercises/',{params : {group:this.state.group, age:this.state.age, skill:this.state.skill, num:this.state.num}})
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ loadExercises: true });
    //this.forceUpdate(e);
  }

  loadAll(e) {
    e.preventDefault();

    axios
      .get("https://frozen-stream-11960.herokuapp.com/exercises/all")
      //axios.get('http://localhost:5000/exercises/all')
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ loadExercises: true });
    //this.forceUpdate(e);
  }

  loadSearch(e) {
    e.preventDefault();

    axios
      .get("https://frozen-stream-11960.herokuapp.com/exercises/search", {
        params: { text: this.state.textVal },
      })
      //axios.get('http://localhost:5000/exercises/search', {params : {text:this.state.textVal}})
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ loadExercises: true });
    //this.forceUpdate(e);
  }

  onChangeSearch = (event) => {
    this.setState({ textVal: event.target.value });
  };

  componentDidMount() {}

  render() {
    const loadExercises = this.state.loadExercises;

    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <h1 className="justify-center">Exercise Database</h1>
        <h2 className="justify-center">Create a Ski Lesson Plan</h2>
        <Container>
          <form onSubmit={this.onSubmit} className="">
            <Row>
              <Col className="selectorbox">
                <Row>
                  <label>Skill Level</label>
                </Row>
                <Row>
                  <select
                    ref="skillInput"
                    type="text"
                    className="form-control"
                    value={this.state.skill}
                    onChange={this.onChangeSkill}
                  >
                    {this.state.skills.map(function (skill) {
                      return (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      );
                    })}
                  </select>
                </Row>
              </Col>
              <Col className="selectorbox">
                <Row>
                  <label>Student Age </label>
                </Row>
                <Row>
                  <select
                    ref="userInput"
                    className="form-control"
                    value={this.state.age}
                    onChange={this.onChangeAge}
                  >
                    {this.state.ages.map(function (age) {
                      return (
                        <option key={age} value={age}>
                          {age}
                        </option>
                      );
                    })}
                  </select>
                </Row>
              </Col>
              <Col className="selectorbox">
                <Row>
                  <label># of Exercises</label>
                </Row>
                <Row>
                  <select
                    ref="exercisenumsInput"
                    type="int"
                    className="form-control"
                    value={this.state.num}
                    onChange={this.onChangeExercisenum}
                  >
                    {this.state.exercisenums.map(function (exercisenum) {
                      return (
                        <option key={exercisenum} value={exercisenum}>
                          {exercisenum}
                        </option>
                      );
                    })}
                  </select>
                </Row>
              </Col>
              <Col className="selectorbox">
                <label style={{ color: "white" }}>Find</label>
                <button
                  onClick={this.onSubmit}
                  type="primary"
                  className="btn btn-dark full-button"
                >
                  Go
                </button>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col className="searchfield">
                <input
                  onChange={this.onChangeSearch}
                  placeholder="  Enter Search"
                />
                <button onClick={this.loadSearch} className="btn btn-dark">
                  Search
                </button>
              </Col>
              <Col className="justify-left seeall-button">
                <button
                  onClick={this.loadAll}
                  className="btn btn-dark full-button"
                >
                  See All
                </button>
              </Col>
            </Row>
          </form>
        </Container>
        {loadExercises ? (
          <ExerciseList
            exercises={this.state.exercises}
            key={this.state.exercises._id}
            val={"Add To Lesson"}
            handler={this.handler}
          />
        ) : null}
      </div>
    );
  }
}
