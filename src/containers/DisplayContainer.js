import { connect } from "react-redux";
import DisplayComponent from "../components/DisplayComponent";
import { getLastPage, toTheFirst } from "../actions/actions";
import { fetchUsers } from "../middlewars/index";
import { formValueSelector } from "redux-form";

function mapStateToProps(state) {
  return {
    users: state.displayReducer.users,
    isLoading: state.displayReducer.isLoading,
    personPerPage: state.displayReducer.personPerPage,
    currentPage: state.paginationReducer.currentPage,
    lastPage: state.displayReducer.lastPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    getLastPage: n => dispatch(getLastPage(n)),
    toTheFirst: () => dispatch(toTheFirst())
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
