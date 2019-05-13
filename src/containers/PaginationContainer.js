import { connect } from "react-redux";
import PaginationComponent from "../components/PaginationComponent";
import {
  increment,
  decrement,
  changeCurrentPage,
  toTheFirst,
  toTheLast
} from "../actions/actions";

function mapStateToProps(state) {
  return {
    currentPage: state.paginationReducer.currentPage,
    personPerPage: state.displayReducer.personPerPage,
    users: state.displayReducer.users,
    lastPage: state.displayReducer.lastPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    changeCurrentPage: n => dispatch(changeCurrentPage(n)),
    toTheFirst: () => dispatch(toTheFirst()),
    toTheLast: n => dispatch(toTheLast(n))
  };
}

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);

export default PaginationContainer;
