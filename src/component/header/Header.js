import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import searchIcon from "../../assets/icon/search-icon.png";
import Search from "../common/search/Search";
import useDeviceType from "../../hooks/useDeviceType";

const Header = () => {
  // 디바이스 크기 체크
  const device = useDeviceType();
  // 네비게이션
  const navigate = useNavigate();

  // api 전달 변수
  const handleSearchClick = (word) => {
    navigate("/search", { state: { query: word } });
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {/* 좌측 로고 */}
      <h1 className={styles.logo}>
        <Link to={`/`}>Movie App</Link>
      </h1>

      {/* 중앙 gnb */}
      {device !== "mobile" && (
        <nav className={styles.gnb}>
          <ul>
            <li>
              <Link to={`/movies`}>전체보기</Link>
            </li>
            <li>
              <Link to={`/genres`}>장르별</Link>
            </li>
            <li>
              <Link to={`/ranking`}>랭킹</Link>
            </li>
            <li>
              <Link to={`/search`}>검색</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* 우측 search */}
      {device !== "mobile" && (
        <div>
          <Search type="header" onSearchClick={handleSearchClick} />
        </div>
      )}

      {/* 모바일 햄버거바 */}
      {device === "mobile" && (
        <div>
          <button
            className={`${styles.menuBtn} ${isOpen ? styles.open : ""}`}
            onClick={toggleMobileMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      )}

      {/* 모바일 메뉴 드롭 */}
      {device === "mobile" && (
        <div className={`${styles.mobileWrap} ${isOpen ? styles.open : ""}`}>
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNav}>
              <li>
                <Link to="/movies" onClick={() => setIsOpen(false)}>
                  전체보기
                </Link>
              </li>
              <li>
                <Link to="/genres" onClick={() => setIsOpen(false)}>
                  장르별
                </Link>
              </li>
              <li>
                <Link to="/ranking" onClick={() => setIsOpen(false)}>
                  랭킹
                </Link>
              </li>
              <li>
                <Link to="/search" onClick={() => setIsOpen(false)}>
                  검색
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
