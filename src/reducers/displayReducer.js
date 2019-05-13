import {
  RECEIVE_USERS,
  FETCH_ERROR,
  GET_LAST_PAGE,
  FILTRED
} from "../constants/actionTypes";

const initialState = {
  users: [],
  filterResult: [],
  isLoading: true,
  fetchError: false,
  personPerPage: 24,
  lastPage: 1
};

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchError: true,
        isLoading: false
      };
    case GET_LAST_PAGE:
      return {
        ...state,
        lastPage: action.payload
      };
    case FILTRED:
      return {
        ...state,
        filterResult: action.payload
      };
    default:
      return state;
  }
}
