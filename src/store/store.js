import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { resetPage, rootFilter } from "../middlewars/index";

import reducer from "../reducers/index";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(resetPage, rootFilter, thunk))
);
