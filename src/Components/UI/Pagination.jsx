import React from "react";

const Pagination = ({ total, perPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pageList">
      {pages.map((page, ind) => {
        return (
          <button
            key={ind}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "activePage background" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
