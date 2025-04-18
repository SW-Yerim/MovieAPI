import { useState } from "react";
import Loading from "../component/common/loading/Loading";
import ErrorMessage from "../component/common/ErrorMessage";
import MovieSlider from "../component/slide/MovieSlider";
import useMovies from "../hooks/useMovies";
import useGenres from "../hooks/useGenres";
import useTops from "../hooks/useTops";

import MovieModal from "../component/common/modal/MovieModal";
import ScrollList from "../component/list/ScrollList";

const Home = () => {
  // 영화 리스트 가져오기
  const { data: movies, isLoading, isError, error } = useMovies();

  // 장르별 영화 리스트 가져오기
  const { data: genreMovies1 } = useGenres(28); // 액션
  const { data: genreMovies2 } = useGenres(27); // 공포
  const { data: genreMovies3 } = useGenres(35); // 코미디

  // 랭킹 영화 리스트 가져오기
  const { data: topMovies } = useTops();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (id) => {
    const movie = movies.find((m) => m.id === id);
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <ErrorMessage message={error.message} />}
      {movies && (
        <article>
          <MovieSlider movies={movies} onCardClick={handleCardClick} />
        </article>
      )}
      {genreMovies1 && (
        <article>
          <ScrollList
            type={"인기 장르 영화 - 액션"}
            movies={genreMovies1}
            onCardClick={handleCardClick}
          />
        </article>
      )}
      {genreMovies2 && (
        <article>
          <ScrollList
            type={"인기 장르 영화 - 공포"}
            movies={genreMovies2}
            onCardClick={handleCardClick}
          />
        </article>
      )}
      {genreMovies3 && (
        <article>
          <ScrollList
            type={"인기 장르 영화 - 코미디"}
            movies={genreMovies3}
            onCardClick={handleCardClick}
          />
        </article>
      )}
      {topMovies && (
        <article>
          <ScrollList
            type={"랭킹 영화"}
            movies={topMovies}
            onCardClick={handleCardClick}
          />
        </article>
      )}
      {isModalOpen && (
        <MovieModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          movie={selectedMovie}
        />
      )}
    </div>
  );
};

export default Home;
