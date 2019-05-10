import { receiveUsers } from "../actions/actions";

export function fetchUsers() {
  return dispatch => {
    const request = async () => {
      const response = await fetch("http://localhost:8080/api/users");
      const json = await response.json();
      dispatch(receiveUsers(json));
      return json;
    };

    return request();
  };
}
