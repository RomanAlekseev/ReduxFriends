import { RECEIVE_USERS } from "../constants/actionTypes";

const initialState = {
  users: [],
  isLoading: true,
  fetchError: false,
  personPerPage: 24,
  cuurrentPage: 1
};

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
