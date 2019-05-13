import * as React from "react";
import PersonItem from "./PersonItem";
import {
  compose,
  filterAge,
  filterGender,
  filterName,
  filterWorkFor,
  currentPageResult
} from "../utilits/utilits";
import "../css/displayComponent.css";

class DisplayComponent extends React.Component {
  lastPage = users => {
    const page = users.length / this.props.personPerPage;
    return Math.ceil(page);
  };
  rootFilter = arr => {
    this.props.getLastPage(this.lastPage);
    const { ageFrom, ageTo, gender, name, company } = this.props;
    const usersArr = compose(
      [
        filterWorkFor(company),
        filterAge(ageFrom, ageTo),
        filterGender(gender),
        filterName(name)
      ],
      arr
    );
    this.props.getLastPage(this.lastPage(usersArr));
    return usersArr;
  };
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <React.Fragment>
        <div className="display container">
          <h2 className="title font-weight-bold text-left item-title">
            Friends
          </h2>
          <small className="text-muted">{267} users was find:</small>
          <ul className="list-unstyled person text-left mt-4  mb-3 d-flex flex-wrap pl-0">
            {currentPageResult(
              this.rootFilter(this.props.users),
              this.props.currentPage,
              this.props.personPerPage
            ).map(item => (
              <PersonItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayComponent;
