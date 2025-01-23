import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hamarosan érkezünk...</h1>
        <Timer />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
