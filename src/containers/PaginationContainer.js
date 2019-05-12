import { connect } from "react-redux";
import PaginationComponent from "../components/PaginationComponent";
import {
  increment,
  decrement,
  changeCurrentPage,
  toTheFirst
} from "../actions/actions";

function mapStateToProps(state) {
  return {
    currentPage: state.paginationReducer.currentPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    changeCurrentPage: n => dispatch(changeCurrentPage(n)),
    toTheFirst: () => dispatch(toTheFirst())
  };
}

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);

export default PaginationContainer;
