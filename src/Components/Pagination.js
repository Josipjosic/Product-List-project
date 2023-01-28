import React from "react";
import './Pagination.css'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {

  const pageNumbers = [];

  
  //pagnation logic for list 
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="Pagination-container">
      <ul className="Pagination-list">
        {pageNumbers.map((number) => (
          <li key={number} >
            <a onClick={() => paginate(number)}  href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
