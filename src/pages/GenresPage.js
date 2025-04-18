import React, { useEffect, useState } from "react";
import useGenreMapping from "../hooks/useGenreMapping";
import useGenres from "../hooks/useGenres";
import Loading from "../component/common/loading/Loading";
import ErrorMessage from "../component/common/ErrorMessage";

import MovieGenres from "../component/genre/MovieGenres";
import MovieModal from "../component/common/modal/MovieModal";
import Sort from "../component/common/sort/Sort";
import List from "../component/list/List";
import Pagination from "../component/common/paging/Pagination";

const GenresPage = () => {
  // 영화 장르 리스트 가져오기
  const { data: genresMapping, isLoading, isError, error } = useGenreMapping();

  // 장르 선택 시 선택된 장르의 영화 리스트 가져오기
  const [selectedGenreId, setSelectedGenreId] = useState();
  const { data: movies, refetch } = useGenres(selectedGenreId, {
    enabled: false,
  });

  const handleGenreClick = async (id) => {
    console.log("id", id);
    setSelectedGenreId(id);
  };
  useEffect(() => {
    if (selectedGenreId) {
      refetch();
    }
  }, [selectedGenreId]);

  // 페이지에 출력될 영화 리스트
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    if (movies) {
      setSelectedMovies(movies);
    }
  }, [movies]);

  // 모달창 -----------------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (id) => {
    const movie = selectedMovies.find((m) => m.id === id);
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
  const sortedMovies = selectedMovies
    ? [...selectedMovies].sort((a, b) => {
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
      {genresMapping && (
        <article className="wrapContainer">
          <h1 className="wrapTitle">장르별 영화</h1>
          {/* 장르 리스트 출력 영역 */}
          <MovieGenres
            data={{
              genres: genresMapping,
              movies: pageMovies,
              onGenreClick: handleGenreClick,
            }}
          />
        </article>
      )}
      {movies && (
        <article className="wrapContainer">
          {/* 정렬 영역 */}
          <Sort
            sort={{
              sortType,
              onSortChange: handleSortChange,
            }}
          />

          {/* 영화 리스트 영역 */}
          <List
            type="genres"
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

export default GenresPage;
