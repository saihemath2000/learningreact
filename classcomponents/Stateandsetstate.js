//React Props are read-only! You will get an error if you try to change their value.
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Stateandsetstate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "tata motors",
      model: "slavia",
    };
  }
  changecompany = () => {
    this.setState({ company: "volkswagen" });
  };
  render() {
    return (
      <div>
        <h1>Hi {this.props.color}</h1>
        <p>{this.state.company}</p>
        <input type="button" value="click" onClick={this.changecompany} />
        <br></br>
        <Link to="/infoaboutevents">Events</Link>
      </div>
    );
  }
}

export default Stateandsetstate;
