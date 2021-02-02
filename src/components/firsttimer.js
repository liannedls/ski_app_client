import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import slidding_img from "./images/slidding.jfif";
import putonski from "./images/putonskis.jpg";
import wedge from "./images/wedge.png";
import wedgeturn from "./images/turn.jpg";
import bye from "./images/bye.jpg";
import falling from "./images/falling.jpg";

export default class FirstTimer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="firsttimer">
        <h1>First Timer Lesson Plan</h1>
        <h2>Meeting Your Students</h2>
        <p>
          First impressions are important. Start the lesson off right by getting
          to know your student.
        </p>
        <p className="sub">At the beginning of the lesson, ask yourself :</p>
        <ul className="a">
          <li>Are they properly dressed and do they feel comfortable?</li>
          <li>Are they familiar with their equipment?</li>
          <li>Do they have any previous injuries?</li>
        </ul>
        <div>
          <h2>First Steps</h2>
          <p>The first steps with your student are very important.</p>
          <p className="sub">
            While some things may seem second nature to you, many students will
            want some instruction on the basics :
          </p>
          <div className="firststep">
            <Row>
              <Col>
                <img
                  src={putonski}
                  alt="Putting on a Ski boot"
                  width="100%"
                  height="100%"
                />
              </Col>
              <Col>
                <ul className="a">
                  <li>Walking in boots</li>
                  <li>Carrying skis</li>
                  <li>Putting on skis</li>
                  <li>Taking skis off</li>
                  <li>Walking with skis on</li>
                  <li>Getting up from the ground while wearing skis</li>
                  <a
                    href="https://www.youtube.com/watch?v=AR7C5qWvuUc"
                    className="ref"
                  >
                    See More
                  </a>
                </ul>
              </Col>
              <Col>
                <img
                  src={falling}
                  alt="Putting on a Ski boot"
                  width="100%"
                  height="100%"
                />
              </Col>
            </Row>
          </div>
          <br />
        </div>
        <h2>Slidding</h2>
        <p>
          Find flat terrain and use poles to slide forward. This will help your
          student experience sliding in a relaxed environment and learn to enjoy
          the feeling.
          <a href="https://www.youtube.com/watch?v=_2zESNSSckA"> See More</a>
        </p>
        <img src={slidding_img} alt="Slidding on Skis" />
        <h2>Learning to Snowplough</h2>
        <p>
          Find a small incline to learn how to snowplough. Explain the
          snowplough, or wedge, shape and how it can control speed. Practice
          this until the student feels in control of their stopping. The game
          red light green light can be very useful for developing control.
          <a href="https://www.youtube.com/watch?v=tXUbCPuc4nw"> See More</a>
        </p>
        <img src={wedge} alt="Wedge Ski" />
        <h2>Learning to Turn</h2>
        <p>
          Now that your student is comfortable stopping, they are ready to learn
          how to turn. Starting in the snowplough position with your body facing
          down the slope and your shins pushing into the front of your boots,
          begin sliding down the fall line. Gradually apply pressure into the
          inside edge of the left ski to start to turn the skis to the right The
          exercises Airplane can help students to make a turn.
          <a href="https://www.youtube.com/watch?v=bEBIAfZ0iW4"> See More</a>
        </p>
        <img src={wedgeturn} alt="Learning to Turn with Skis" />
        <h2>Ending the Lesson</h2>
        <ul className="a">
          <li>Provide feedback</li>
          <li>Did you enjoy the lesson?</li>
          <li>Do you want to book another lesson?</li>
          <li>Wish them the best!</li>
        </ul>
        <p>
          <img src={bye} alt="End of Lesson" width="50%" height="50%" />{" "}
        </p>
      </div>
    );
  }
}
