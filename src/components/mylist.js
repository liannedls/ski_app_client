import React, { Component } from "react";
import axios from "axios";
//import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import ExerciseList from "./exercise-list.component.js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Container, Row, Col } from "react-bootstrap";

export default class MyList extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.clearthis = this.clearthis.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.state = {
      id_list: "",
      title: "Untitled Lesson",
      newTitle: "test",
      exercises: [
        { _id: "", name: "", description: "", group: "", age: "", skill: "" },
      ],
    };
  }

  saveTitle() {
    localStorage.setItem("title", this.state.title);
  }

  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  clearthis() {
    localStorage.setItem("id_list", "");
    this.componentDidMount();
  }

  handler() {
    this.setState({
      someVar: "some value",
    });
    this.componentDidMount();
  }

  generatePDF() {
    var doc = new jsPDF("p", "pt");
    doc.setFont("helvetica");
    doc.setFontSize(28);
    doc.setTextColor(100);
    if (this.state.title != null) {
      doc.text(this.state.title, 300, 40, "center");
    } else {
      doc.text("Untitled", 300, 40, "center");
    }

    var i;
    // define the columns we want and their titles
    const tableColumn = ["Exercise", "Description"];
    // define an empty array of rows
    const tableRows = [];

    for (i = 0; i < this.state.exercises.length; i++) {
      tableRows.push(Object.values(this.state.exercises[i]).splice(1, 2));
    }
    // for each ticket pass all its data into an array
    // push each tickcet's info into a row
    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 60 });
    // ticket title. and margin-top + margin-left
    if (this.state.title != null) {
      doc.save(this.state.title + ".pdf");
    } else {
      doc.save("untitled.pdf");
    }
  }

  componentDidMount() {
    if (localStorage.getItem("id_list") === null) {
      return false;
    } else {
      const listIds = localStorage.getItem("id_list").split(",");
      let data = [];
      let add_string = "";
      let count = 1;
      if (listIds.length >= 1) {
        for (const id of listIds) {
          //axios.get('http://localhost:5000/exercises/mylist',{params : {id : id.replace('\"','').replace('\"','')}})
          axios
            .get("https://frozen-stream-11960.herokuapp.com/exercises/mylist", {
              params: { id: id.replace('"', "").replace('"', "") },
            })
            .then((response) => {
              this.setState({
                exercises: [...this.state.exercises, response.data],
              });
              if (count === listIds.length) {
                add_string = add_string + JSON.stringify(response.data._id);
              } else {
                add_string =
                  add_string + JSON.stringify(response.data._id) + ",";
                count = count + 1;
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        this.setState({ exercises: data });
      }
    }
  }

  render() {
    return (
      <div className="Mylist">
        <Container className="justify-center">
          <Col>
            <Row className="justify-center">
              <h1>{this.state.title}</h1>
            </Row>
            <Row className="mylistcontrols">
              <Col className="searchfield">
                <input onChange={this.changeTitle} placeholder="  Enter name" />
                <button onClick={this.saveTitle} className="btn btn-dark">
                  Save Title
                </button>
              </Col>
              <Col className="cleargenerate">
                <button onClick={this.clearthis} className="btn btn-dark">
                  Clear List
                </button>
                <button
                  onClick={this.generatePDF}
                  type="primary"
                  className="btn btn-dark"
                >
                  Generate PDF
                </button>
              </Col>
            </Row>
          </Col>
        </Container>
        <ExerciseList
          exercises={this.state.exercises}
          key={this.state.exercises._id}
          val={"Delete"}
          handler={this.handler}
        />
      </div>
    );
  }
}
