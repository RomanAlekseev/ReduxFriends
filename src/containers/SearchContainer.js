import SearchComponent from "../components/SearchComponent";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    parameters: state.searchReducer
  };
}

export default connect(mapStateToProps)(SearchComponent);
