import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import Title from "./components/Title";
import Quote from "./components/Quote";
import "./styles.css";
import rootReducer from "./reducers";

// Step 1: create the Redux store
const store = createStore(rootReducer, applyMiddleware(logger));

function App() {
  return (
    <div className="App">
      <Title />
      <Quote />
    </div>
  );
}

const rootElement = document.getElementById("root");

// Step 2: Provide the store
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
