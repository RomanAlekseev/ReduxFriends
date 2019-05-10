import * as React from "react";
import { Field } from "redux-form";
import RadioButton from "./RadioButton";
import "../css/searchComponent.css";

const SearchComponent = props => {
  const { ageFrom, ageTo } = props;
  return (
    <div className="container">
      <form className="mb-2">
        <div className="form-group">
          <Field
            className="mt-5 col-12"
            name="name"
            component="input"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="form-row small d-flex justify-content-between text-left text-lg-center">
          <div className="form-group text-left px-1 col-3">
            <RadioButton gender="male" />
            <RadioButton gender="female" />
            <RadioButton gender="all" />
          </div>
          <div className="form-group col-sm-5">
            <label htmlFor="from">age from</label>
            <Field
              name="ageFrom"
              component="input"
              type="number"
              min="18"
              max={ageTo}
              id="from"
              className="ageInput mx-1 px-1"
            />
            <label htmlFor="to">to</label>
            <Field
              name="ageTo"
              component="input"
              type="number"
              min={ageFrom}
              max="40"
              id="to"
              className="ageInput ml-1 px-1"
            />
          </div>
          <div className="form-group d-flex align-self-baseline col-sm-3">
            <label className="ml-sm-auto pt-1" htmlFor="work">
              works for
            </label>
            <Field
              name="company"
              component="input"
              type="text"
              id="work"
              className="workInput mx-1 col-4 col-sm-5 px-1"
              placeholder="Company Name"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
