import * as React from "react";
import { Field } from "redux-form";

const RadioButton = props => {
  return (
    <div className="form-check form-check-inline">
      <Field
        id={props.gender}
        className="form-check-input d-none"
        component="input"
        type="radio"
        name="gender"
        value={props.gender}
      />
      <label className="form-check-label" htmlFor={props.gender}>
        {props.gender === "male" || props.gender === "female"
          ? props.gender
          : "not specifed"}
      </label>
      <span className="pl-2">
        {props.gender === "male" || props.gender === "female" ? "/" : null}
      </span>
    </div>
  );
};

export default RadioButton;
