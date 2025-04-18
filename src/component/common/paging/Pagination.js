import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ paging }) => {
  const {
    currentPage,
    totalPages,
    cardSizeOptions,
    onPageChange,
    onSizeChange,
  } = paging;

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pageContainor}>
      {/* 페이징 숫자 */}
      <nav className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &laquo; Prev
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={number === currentPage ? styles.active : ""}
          >
            {number}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next &raquo;
        </button>
      </nav>

      {/* 페이징 갯수 수정 */}
      <div className={styles.pageSize}>
        <select onChange={onSizeChange}>
          {cardSizeOptions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
