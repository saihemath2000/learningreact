import React from "react";
import { Link } from "react-router-dom";

function Propsandevents(props) {
  const Alert = (a, b) => {
    alert(b.type);
  };
  return (
    <div>
      <h2>Car name</h2>
      <h3>{props.car}</h3>
      <input
        type="button"
        value="alert"
        onClick={(event) => Alert("Oye", event)}
      ></input>
      <br></br>
      <Link to="/Mapinfo">MapInfo</Link>
    </div>
  );
}

export default Propsandevents;
