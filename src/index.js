import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import SearchContainer from "./containers/SearchContainer";
import DisplayContainer from "./containers/DisplayContainer";
import PaginationContainer from "./containers/PaginationContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <SearchContainer />
      <PaginationContainer top />
      <DisplayContainer />
      <PaginationContainer />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
