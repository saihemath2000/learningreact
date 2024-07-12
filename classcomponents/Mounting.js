// Refer Updating phase
// getDerivedStateFromProps, shouldComponentUpdate, render , getSnapshotBeforeUdpate, ComponentDidUpdate

// for unmounting --->componentWillUnmount
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dizi: "Yalicapkini",
      actor: "MertRamazan",
      actress: "Afra Saracoglu",
      singer: "Mabel Matiz",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { singer: props.singer };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ actress: "Afra saracoglu 😍❤" });
    }, 1000);
  }
  render() {
    return (
      <div>
        <table>
          <td>
            <th>dizi</th>
            <th>{this.state.dizi}</th>
          </td>
          <td>
            <th>actress</th>
            <th>{this.state.actress}</th>
          </td>
          <td>
            <th>singer</th>
            <th>{this.state.singer}</th>
          </td>
        </table>
        <br></br>
        <Link to="/infoaboutsetstate">SetStateInfo</Link>
      </div>
    );
  }
}

export default Mounting;
