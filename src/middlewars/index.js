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

export const currentPageResult = (users, pageNumber, itemsPerPage = 24) => {
  let i = pageNumber <= 1 ? 0 : itemsPerPage * pageNumber - itemsPerPage;
  users = users.slice(i, itemsPerPage * pageNumber);
  return users;
};
