import SearchComponent from "../components/SearchComponent";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

// const mapStateToProps = state => {
//   return {
//     form: state.form.searchBar
//   };
// };

// const SearchContainer = compose(
//   connect(mapStateToProps),
//   reduxForm({
//     // a unique name for the form
//     form: "searchBar",
//     initialValues: {
//       gender: "all",
//       name: "",
//       ageFrom: 18,
//       ageTo: 40,
//       company: ""
//     }
//   })
// )(SearchComponent);
let SearchContainer = reduxForm({
  form: "searchBar",
  initialValues: {
    gender: "all",
    name: "",
    ageFrom: "18",
    ageTo: "40",
    company: ""
  }
})(SearchComponent);

const selector = formValueSelector("searchBar");

SearchContainer = connect(state => {
  // can select values individually
  const ageFrom = selector(state, "ageFrom");
  const ageTo = selector(state, "ageTo");
  return {
    ageFrom,
    ageTo
  };
})(SearchContainer);

export default SearchContainer;
