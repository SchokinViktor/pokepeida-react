import React from "react";


const Pagination = ({
  elementsPerPage,
  totalElements,
  OnChange,
  currentPage,
  buttons,
}) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <ul className='pagination__pagination-list'>
        {pageNumbers.map((number) => {
          return (
            <li className='pagination__list-item' key={number}>
              {/* pagination__pagination-page pagination__pagination-page_active */}
              <span
                className={
                  currentPage === number
                    ? "pagination__pagination-page pagination__pagination-page_active"
                    : "pagination__pagination-page"
                }
                onClick={() => OnChange(number)}
              >
                {number}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
