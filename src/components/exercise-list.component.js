import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ExerciseElem from "./exercise-elem.component.js";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
  }

  exerciseList() {
    return this.props.exercises.map((currentexercise) => {
      return (
        <ExerciseElem
          exercise={currentexercise}
          key={currentexercise._id}
          val={this.props.val}
          handler={this.props.handler}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="namecol">Name</th>
              <th className="desc">Description</th>
              <th className="staticfields">Skill Level</th>
              <th className="staticfields">Age</th>
              <th className="staticfields">Video</th>
              <th className="staticadd">{this.props.val}</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
