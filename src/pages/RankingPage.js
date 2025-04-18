import React, { useState } from "react";
import useTops from "../hooks/useTops";
import Loading from "../component/common/loading/Loading";
import ErrorMessage from "../component/common/ErrorMessage";
import MovieModal from "../component/common/modal/MovieModal";
import List from "../component/list/List";

const RankingPage = () => {
  // 영화 리스트 가져오기
  const { data: movies, isLoading, isError, error } = useTops();

  // 모달창 -----------------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (id) => {
    const movie = movies.find((m) => m.id === id);
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };
  // ------------------------------

  // 정렬 메서드 -------------------
  const sortedMovies = movies
    ? [...movies].sort((a, b) => {
        return b.vote_average - a.vote_average;
      })
    : [];

  // 페이지에 출력될 영화 카드 구하기
  const pageMovies = sortedMovies.slice(0, 10);

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <ErrorMessage message={error.message} />}
      {movies && (
        <article className="wrapContainer">
          <h1 className="wrapTitle">영화 Top 10</h1>

          {/* 영화 리스트 영역 */}
          <List type="rank" movies={pageMovies} onCardClick={handleCardClick} />
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

export default RankingPage;
