import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";

const Competencies = props => {
  return (
    <div>
      <div className="Titles">
        Competencies
        <div>match params: {props.match.params.id}</div>
      </div>

      <div style={{ marginTop: "100px" }} className="gallery">
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
        <img src="https://picsum.photos/200" alt="random " />
      </div>
    </div>
  );
};

export default withRouter(Competencies);
