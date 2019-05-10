import { receiveUsers, fetch_error } from "../actions/actions";

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
