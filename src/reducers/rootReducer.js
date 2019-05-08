import { combineReducers } from "redux";

import displayReducer from "./displayReducer";
import loginReducer from "./loginReducer";
import paginationReducer from "./paginationReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  displayReducer,
  loginReducer,
  paginationReducer,
  searchReducer
});
