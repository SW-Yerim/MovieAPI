import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./MovieSlider.module.css";
import prevArrowIcon from "../../assets/icon/w-prev-arrow.png";
import nextArrowIcon from "../../assets/icon/w-next-arrow.png";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img style={{ width: "100%" }} src={nextArrowIcon} alt="next-arrow" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={prevArrowIcon} alt="prev-arrow" />
    </div>
  );
};

const MovieSlider = ({ movies, onCardClick }) => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setCenterIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "100px",
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`${styles.card} ${
              index === centerIndex ? styles.active : styles.blur
            }`}
            onClick={() => onCardClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.contents}>
                <p>⭐ {movie.vote_average.toFixed(1)} / 10</p>
                <div className={styles.genres}>
                  {movie.genreNames.map((genre, index) => (
                    <p key={index} className={styles.genre}>
                      {genre.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
