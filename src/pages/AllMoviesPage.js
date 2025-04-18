import React, { useState } from "react";
import useYears from "../hooks/useYears";
import Loading from "../component/common/loading/Loading";
import ErrorMessage from "../component/common/ErrorMessage";
import MovieModal from "../component/common/modal/MovieModal";
import Sort from "../component/common/sort/Sort";
import List from "../component/list/List";
import Pagination from "../component/common/paging/Pagination";

const AllMoviesPage = () => {
  // 영화 리스트 가져오기
  const { data: movies, isLoading, isError, error } = useYears(2025);

  // 모달창 -----------------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (id) => {
    const movie = movies.find((m) => m.id === id);
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };
  // ------------------------------

  // 현재 페이지에서 출력 될 카드 갯수 변수
  const [cardSize, setCardSize] = useState(8);
  const cardSizeOptions = [8, 12, 16];

  // 페이징 관련 변수
  const [currentPage, setCurrentPage] = useState(1);

  // 페이징 메서드 -----------------
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };
  const handlePageSizeChange = (event) => {
    setCardSize(Number(event.target.value));
    setCurrentPage(1);
  };
  // ------------------------------

  // 정렬 관련 변수
  const [sortType, setSortType] = useState("title");

  // 정렬 메서드 -------------------
  const sortedMovies = movies
    ? [...movies].sort((a, b) => {
        if (sortType === "rating") {
          return b.vote_average - a.vote_average;
        } else if (sortType === "title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      })
    : [];
  const handleSortChange = (event) => {
    setSortType(event.target.value);
    setCurrentPage(1);
  };
  // ------------------------------

  // 페이지에 출력될 영화 카드 구하기
  const totalPages = Math.ceil(sortedMovies?.length / cardSize);
  const pageMovies = sortedMovies.slice(
    (currentPage - 1) * cardSize,
    currentPage * cardSize
  );

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <ErrorMessage message={error.message} />}
      {movies && (
        <article className="wrapContainer">
          <h1 className="wrapTitle">영화 전체보기</h1>

          {/* 정렬 영역 */}
          <Sort
            sort={{
              sortType,
              onSortChange: handleSortChange,
            }}
          />

          {/* 영화 리스트 영역 */}
          <List
            type="allMovie"
            movies={pageMovies}
            onCardClick={handleCardClick}
          />

          {/* 페이징 영역 */}
          <Pagination
            paging={{
              totalPages,
              currentPage,
              cardSizeOptions,
              onPageChange: handlePageChange,
              onSizeChange: handlePageSizeChange,
            }}
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

export default AllMoviesPage;
