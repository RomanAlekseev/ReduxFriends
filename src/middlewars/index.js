import { receiveUsers, fetch_error, toTheFirst } from "../actions/actions";

export function fetchUsers() {
  return dispatch => {
    const request = async () => {
      const response = await fetch("http://localhost:8080/api/users");
      if (response.status === 200) {
        const json = await response.json();
        dispatch(receiveUsers(json));
        return json;
      } else {
        dispatch(fetch_error());
      }
    };
    return request();
  };
}

export const resetPage = store => next => action => {
  const prevLastPage = store.getState().displayReducer.lastPage;
  const currentPage = store.getState().paginationReducer.currentPage;
  if (
    action.type === "GET_LAST_PAGE" &&
    action.payload !== prevLastPage &&
    currentPage !== 1
  ) {
    console.log(prevLastPage);
    store.dispatch(toTheFirst());
  }
  let result = next(action);
  return result;
};
