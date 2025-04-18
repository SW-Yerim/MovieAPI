import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const YOUR_KEY = "d96e231c4d559794b00820992724713e";

// 영화 장르 가져오기
export const getMovieGenreMapping = async () => {
  const response = await axios.get(
    `${BASE_URL}/genre/movie/list?language=ko&api_key=${YOUR_KEY}`
  );

  // console.log("[getMovieGenreMapping] ", response.data.genres);

  return response.data.genres;
};

// 영화 장르 매핑하기
export const getMappingGenres = (movies, genres) => {
  const result = movies.map((item) => {
    const genreNames = item.genre_ids.map((id) => {
      return genres.find((genre) => genre.id === id);
    });
    return {
      ...item,
      genreNames,
    };
  });
  return result;
};

// 인기있는 영화 리스트 가져오기 ( 메인 슬라이드 )
export const getMovies = async () => {
  const genres = await getMovieGenreMapping();
  const response = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${YOUR_KEY}&language=ko`
  );

  // 영화 장르 매핑하기
  const newResponse = getMappingGenres(response.data.results, genres);
  console.log("[getMovies] ", newResponse);

  return newResponse;
};

// 영화 리스트 가져오기 ( 전체보기 )
export const getMoviesYears = async (year) => {
  const genres = await getMovieGenreMapping();
  const response = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${YOUR_KEY}&language=ko&primary_release_year=${year}`
  );

  // 영화 장르 매핑하기
  const newResponse = getMappingGenres(response.data.results, genres);
  console.log("[getMoviesYears] ", newResponse);

  return newResponse;
};

// 영화 리스트 가져오기 ( 장르별 )
export const getMoviesGenres = async (genre) => {
  const genres = await getMovieGenreMapping();
  const response = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${YOUR_KEY}&language=ko&with_genres=${genre}`
  );

  // 영화 장르 매핑하기
  const newResponse = getMappingGenres(response.data.results, genres);
  console.log("[getMoviesGenres] ", newResponse);

  return newResponse;
};

// 영화 리스트 가져오기 ( 랭킹 )
export const getMoviesTop = async () => {
  const genres = await getMovieGenreMapping();
  const response = await axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${YOUR_KEY}&language=ko`
  );

  // 영화 장르 매핑하기
  const newResponse = getMappingGenres(response.data.results, genres);
  console.log("[getMoviesTop] ", newResponse);

  return newResponse;
};

// 영화 리스트 가져오기 ( 검색 )
export const getMoviesSearch = async (searchWord) => {
  const genres = await getMovieGenreMapping();
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${YOUR_KEY}&language=ko&query=${searchWord}`
  );

  // 영화 장르 매핑하기
  const newResponse = getMappingGenres(response.data.results, genres);
  console.log("[getMoviesSearch] ", newResponse);

  return newResponse;
};

// 선택된 영화 상세 내용 가져오기
export const getMoviesDetail = async (id) => {
  const genres = await getMovieGenreMapping();
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${YOUR_KEY}&language=ko&append_to_response=credits`
  );

  // 영화 장르 매핑하기
  const newResponse = getMappingGenres(response.data.results, genres);
  console.log("[getMoviesDetail] ", newResponse);

  return newResponse;
};
