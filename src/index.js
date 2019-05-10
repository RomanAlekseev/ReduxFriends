import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import SearchContainer from "./containers/SearchContainer";
import DisplayContainer from "./containers/DisplayContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <SearchContainer />
      <DisplayContainer />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
