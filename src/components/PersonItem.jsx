import * as React from "react";
import "../css/personItem.css";

const PersonItem = props => {
  const makeUserIcon = str => {
    var result = str.split(" ");
    return result[0][0] + result[1][0];
  };
  const { item } = props;
  return (
    <li className="position-relative mb-5 col-12 col-md-6 pl-0 item item-li">
      <div className="icon rounded-circle position-absolute bg-secondary px-3 py-3 text-center">
        <div className="my-auto icon__inicial">{makeUserIcon(item.name)}</div>
      </div>
      <div className="name pl-4 ml-5">
        <a href="#user">
          <ins>{item.name}</ins>
        </a>
      </div>
      <div className="info text-muted pl-4 ml-5">
        <span className="specifed mr-1 small">{item.gender},</span>
        <span className="specifed mr-1 small">{item.age} y.o.,</span>
        <span className="specifed mr-1 small"> works for {item.company}</span>
      </div>
    </li>
  );
};

export default PersonItem;
