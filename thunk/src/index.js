import React from "react";
import ReactDOM from "react-dom";

import Title from "./components/Title";
import "./styles.css";

// Step 1: create the Redux store

function App() {
  return (
    <div className="App">
      <Title />
    </div>
  );
}

const rootElement = document.getElementById("root");

// Step 2: Provide the store
ReactDOM.render(<App />, rootElement);
