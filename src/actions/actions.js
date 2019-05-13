import {
  RECEIVE_USERS,
  FETCH_ERROR,
  INCREMENT,
  DECREMENT,
  CHANGE_CURRENT_PAGE,
  TO_THE_FIRST,
  GET_LAST_PAGE,
  TO_THE_LAST,
  FILTRED
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

export const toTheFirst = () => {
  return {
    type: TO_THE_FIRST
  };
};

export const toTheLast = n => {
  return {
    type: TO_THE_LAST,
    payload: n
  };
};

export const getLastPage = n => {
  return {
    type: GET_LAST_PAGE,
    payload: n
  };
};

export const filtred = users => {
  return {
    type: FILTRED,
    payload: users
  };
};
