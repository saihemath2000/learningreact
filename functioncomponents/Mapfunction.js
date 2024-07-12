import React from "react";

function Display(props) {
  return <li>{props.brand}</li>;
}
function Mapfunction() {
  const cars = ["volvo", "scorpio", "thar", "landrover", "skoda"];
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <Display brand={car} />
        ))}
      </ul>
    </div>
  );
}

export default Mapfunction;
