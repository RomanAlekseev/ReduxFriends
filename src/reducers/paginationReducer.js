import {
  INCREMENT,
  DECREMENT,
  CHANGE_CURRENT_PAGE,
  TO_THE_FIRST
} from "../constants/actionTypes";

const initialState = {
  currentPage: 1
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        currentPage: state.currentPage + 1
      };
    case DECREMENT:
      return {
        ...state,
        currentPage: state.currentPage - 1
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case TO_THE_FIRST:
      return {
        ...state,
        currentPage: 1
      };
    default:
      return state;
  }
}
