import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withRouter } from "react-router-dom";
import routes from "./routes";

function App(props) {
  console.log(() => props);
  return (
    <div className="App">
      {routes}
      <div className="buttons">
        <button onClick={() => props.history.push("/1")}>Competencies</button>
        <button onClick={() => props.history.push("/hello")}>Hello</button>
      </div>
    </div>
  );
}

export default withRouter(App);
