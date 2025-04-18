import React from "react";
import styles from "./Sort.module.css";

const Sort = ({ sort }) => {
  const { sortType, onSortChange } = sort;

  return (
    <div>
      <div className={styles.sort}>
        <select value={sortType} onChange={onSortChange}>
          <option value="rating">평점순</option>
          <option value="title">이름순</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
