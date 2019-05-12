import { connect } from "react-redux";
import DisplayComponent from "../components/DisplayComponent";
import { fetchUsers } from "../middlewars/index";
import { formValueSelector } from "redux-form";

function mapStateToProps(state) {
  return {
    users: state.displayReducer.users,
    isLoading: state.displayReducer.isLoading,
    fetchError: state.displayReducer.fetchError,
    personPerPage: state.displayReducer.personPerPage,
    currentPage: state.paginationReducer.currentPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
}
let DisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayComponent);

const selector = formValueSelector("searchBar");

DisplayContainer = connect(state => {
  const ageFrom = selector(state, "ageFrom");
  const ageTo = selector(state, "ageTo");
  const gender = selector(state, "gender");
  const name = selector(state, "name");
  const company = selector(state, "company");
  return {
    ageFrom,
    ageTo,
    gender,
    name,
    company
  };
})(DisplayContainer);

export default DisplayContainer;
