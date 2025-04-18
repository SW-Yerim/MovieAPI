import React, { useState } from "react";
import styles from "./Search.module.css";
import searchIcon from "../../../assets/icon/search-icon.png";

const Search = ({ type, onSearchClick }) => {
  // 검색어 저장
  const [searchWord, setSearchWord] = useState();
  const handleSearchWordChange = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <div className={`${styles.search} ${type === "page" ? styles.page : ""}`}>
      <input
        type="search"
        value={searchWord || ""}
        onChange={(e) => handleSearchWordChange(e)}
        placeholder="영화 제목 검색"
      />
      <img
        src={searchIcon}
        alt="search"
        onClick={() => {
          onSearchClick(searchWord);
        }}
        className={styles.searchIcon}
      />
    </div>
  );
};

export default Search;
