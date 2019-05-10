import { RECEIVE_USERS, FETCH_ERROR } from "../constants/actionTypes";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    payload: users
  };
};

export const fetch_error = () => {
  return {
    type: FETCH_ERROR
  };
};
