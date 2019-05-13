import React from "react";
import "../css/paginationComponent.css";

const PaginationComponent = props => {
  const getPageNumbers = (currentPage, pageEnd = 8) => {
    let arr = [];
    let pageStart = 1;
    const count = pageEnd;
    while (currentPage > pageEnd) {
      pageEnd += count;
      pageStart += count;
    }
    for (pageStart; pageStart <= pageEnd; pageStart++) {
      arr.push(pageStart);
    }
    if (props.currentPage > props.lastPage - 8) {
      const arrNew = [...arr.slice()];
      console.log(arrNew);
    }
    return arr;
  };
  return (
    <div className="pagination">
      <button
        className="pagination-control"
        disabled={props.currentPage < 9}
        onClick={props.toTheFirst}
      >
        &lt;&lt;
      </button>
      <button
        className="pagination-control"
        onClick={props.decrement}
        disabled={props.currentPage === 1}
      >
        &lt;
      </button>
      <ul className="pagination-list">
        {getPageNumbers(props.currentPage).map(i => {
          return i <= props.lastPage ? (
            <li
              className={
                props.currentPage === i
                  ? "pagination-item active"
                  : "pagination-item"
              }
              onClick={e => props.changeCurrentPage(e.target.value)}
              value={i}
              key={i}
            >
              {i}
            </li>
          ) : null;
        })}
      </ul>
      <button
        className="pagination-control"
        onClick={props.increment}
        disabled={props.currentPage === props.lastPage}
      >
        &gt;
      </button>
      <button
        className="pagination-control"
        onClick={() => props.toTheLast(props.lastPage)}
        disabled={props.currentPage > props.lastPage - 8}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default PaginationComponent;
