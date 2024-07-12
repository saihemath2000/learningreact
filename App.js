import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stateandsetstate from "./classcomponents/Stateandsetstate.js";
import Mounting from "./classcomponents/Mounting.js";
import Propsandevents from "./functioncomponents/Propsandevents.js";
import Mapfunction from "./functioncomponents/Mapfunction.js";
import Usestatehook from "./functioncomponents/Usestatehook.js";
import Forms from "./functioncomponents/Forms";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mounting singer="sai" />} />
            <Route
              path="/infoaboutsetstate"
              element={<Stateandsetstate color="red" />}
            />
            <Route
              path="/infoaboutevents"
              element={<Propsandevents car="Mahindra scorpio N" />}
            />
            <Route path="/Mapinfo" element={<Mapfunction />} />
            <Route path="/infousestate" element={<Usestatehook />} />
            <Route path="/formsinfo" element={<Forms />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
