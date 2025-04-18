import React from "react";
import styles from "./MovieModal.module.css";
import { Link } from "react-router-dom";

const MovieModal = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <div className={styles.infoWrap}>
          <div className={styles.info}>
            <ul>
              <li>
                <h2 className={styles.title}>{movie.title}</h2>
              </li>
              <li>
                <p>
                  <strong>평점</strong> {movie.vote_average.toFixed(1)} / 10
                </p>
              </li>
              <li>
                <p>
                  <strong>인기도</strong> {movie.popularity.toFixed(0)}
                </p>
              </li>
              <li>
                <p>
                  <strong>투표수</strong> {movie.vote_count}
                </p>
              </li>
              <li>
                <p>
                  <strong>장르</strong>{" "}
                  {movie.genreNames.map((genre) => genre.name).join(", ")}
                </p>
              </li>
              <li>
                <p className={styles.detail}>
                  <strong>자세히보기</strong>
                  <Link
                    to={`https://www.themoviedb.org/movie/${movie.id}-the-amateur`}
                  >
                    상세보기 →
                  </Link>
                </p>
              </li>
            </ul>
            <div className={styles.image}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </div>
          <div className={styles.description}>
            <strong>줄거리</strong>
            <p>{movie.overview ? movie.overview : "줄거리가 없습니다."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
