import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import displayReducer from "./displayReducer";
import loginReducer from "./loginReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
  displayReducer,
  loginReducer,
  paginationReducer,
  form: formReducer
});
