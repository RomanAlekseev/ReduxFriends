import * as React from "react";
import PersonItem from "./PersonItem";
import {
  compose,
  filterAge,
  filterGender,
  filterName,
  filterWorkFor
} from "../utilits/utilits";
import { currentPageResult } from "../middlewars/index";
import "../css/displayComponent.css";

class DisplayComponent extends React.Component {
  lastPage = users => {
    const page = users.length / this.props.personPerPage;
    return Math.ceil(page);
  };
  resultLength = () => this.props.lastPage * this.props.personPerPage;
  rootFilter = arr => {
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
    return currentPageResult(
      usersArr,
      this.props.currentPage,
      this.props.personPerPage
    );
  };
  componentDidMount(nextProps, nextState) {
    this.props.fetchUsers();
  }
  render() {
    return (
      <React.Fragment>
        <div className="display container">
          <h2 className="title font-weight-bold text-left item-title">
            Friends
          </h2>
          {this.props.isLoading ? (
            <img src={require("../img/giphy.gif")} alt="spiner" />
          ) : (
            <React.Fragment>
              <small className="text-muted">
                {this.resultLength()} users was find:
              </small>
              <ul className="list-unstyled person text-left mt-4  mb-3 d-flex flex-wrap pl-0">
                {this.rootFilter(this.props.users).map(item => (
                  <PersonItem item={item} key={item.id} />
                ))}
              </ul>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayComponent;
