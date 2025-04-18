import React from "react";
import styles from "./List.module.css";

const List = ({ type, movies, onCardClick }) => {
  return (
    <div>
      {/* 영화 리스트 영역 */}
      <ul className={`${styles.list} ${type === "rank" && styles.rank}`}>
        {movies.map((movie, index) => (
          <li key={movie.id} onClick={() => onCardClick(movie.id)}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <p className={styles.title}>
              {type === "rank" ? index + 1 + ". " + movie.title : movie.title}
            </p>
            <p className={styles.year}>({movie.release_date.substr(0, 4)})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
