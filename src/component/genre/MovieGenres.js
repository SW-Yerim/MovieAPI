import React from "react";
import styles from "./MovieGenres.module.css";

const MovieGenres = ({ data }) => {
  const { genres, onGenreClick } = data;
  return (
    <div>
      {/* 영화 장르 리스트 영역 */}
      <ul className={styles.list}>
        {genres.map((genre) => (
          <li key={genre.id} onClick={() => onGenreClick(genre.id)}>
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieGenres;
