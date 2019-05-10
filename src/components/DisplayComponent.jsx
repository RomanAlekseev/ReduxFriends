import * as React from "react";
import PersonItem from "./PersonItem";
import {
  compose,
  filterAge,
  filterGender,
  filterName,
  filterWorkFor
} from "../utilits/utilits";
import "../css/displayComponent.css";

class DisplayComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  rootFilter = arr => {
    const { ageFrom, ageTo, gender, name, company } = this.props;
    return compose(
      [
        filterWorkFor(company),
        filterAge(ageFrom, ageTo),
        filterGender(gender),
        filterName(name)
      ],
      arr
    );
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
            {this.rootFilter(this.props.users)
              .slice(0, 24)
              .map(item => (
                <PersonItem item={item} key={item.id} />
              ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayComponent;
