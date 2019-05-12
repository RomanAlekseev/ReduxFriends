import {
  RECEIVE_USERS,
  FETCH_ERROR,
  INCREMENT,
  DECREMENT,
  CHANGE_CURRENT_PAGE,
  TO_THE_FIRST
} from "../constants/actionTypes";

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

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const changeCurrentPage = n => {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload: n
  };
};

export const toTheFirst = n => {
  return {
    type: TO_THE_FIRST
  };
};
