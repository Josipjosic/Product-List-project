import React from "react";
import './Pagination.scss'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  //pagnation logic for listing X number of items
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="Pagination-container">
      <ul className="Pagination-list">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => {
                paginate(number); window.scrollTo(0, 0);
              }}
              href={`#product-page-${number}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
