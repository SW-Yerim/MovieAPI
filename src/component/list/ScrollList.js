import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieGenres from "../genre/MovieGenres";
import styles from "./ScrollList.module.css";

const ScrollList = ({ type, movies, onCardClick }) => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    swipeToSlide: true,
    slidesToShow: 5,
    speed: 700,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <h1 className={styles.sliderTitle}>{type}</h1>
      <div>
        <Slider {...settings}>
          {movies &&
            movies.slice(0, 6).map((movie, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.image}
                  onClick={() => onCardClick(movie.id)}
                />

                <div className={styles.contents}>
                  <p className={styles.title}>{movie.title}</p>
                  <p className={styles.year}>
                    ({movie.release_date.substr(0, 4)})
                  </p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ScrollList;
