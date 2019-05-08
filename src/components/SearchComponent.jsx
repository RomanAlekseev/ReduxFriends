import * as React from "react";

const SearchComponent = () => {
  return (
    <div className="container">
      <form className="mb-2">
        <div className="form-group">
          <input
            className="mt-5 col-12"
            id="filterInput"
            name="filterInput"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="form-row small d-flex justify-content-between text-left text-lg-center">
          <div className="form-group text-left px-1 col-4">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input d-none"
                type="checkbox"
                name="male"
                id="male"
              />
              <label className="form-check-label" htmlFor="male">
                male
              </label>
              <span className="pl-2">/</span>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input d-none"
                type="checkbox"
                id="female"
                name="female"
              />
              <label className="form-check-label" htmlFor="female">
                female
              </label>
              <span className="pl-2">/</span>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input d-none"
                type="checkbox"
                id="every"
                name="every"
              />
              <label className="form-check-label" htmlFor="every">
                not specifed
              </label>
            </div>
          </div>
        </div>
        <div className="form-group col-sm-5">
          <label htmlFor="from">age from</label>
          <input
            type="number"
            min="18"
            max="40"
            id="from"
            className="mx-1 px-1"
            style={{ width: "50px" }}
            defaultValue="18"
          />
          <label htmlFor="to">to</label>
          <input
            type="number"
            max="40"
            id="to"
            className="ml-1 px-1"
            style={{ width: "50px" }}
            defaultValue="40"
          />
        </div>
        <div className="form-group d-flex align-self-baseline col-sm-3">
          <label className="ml-sm-auto pt-2" htmlFor="work">
            works for
          </label>
          <input type="text" id="work" className="mx-1 col-3 px-1" />
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
