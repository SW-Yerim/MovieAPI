import React, { useEffect, useState } from "react";
import Movie from "../component/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`
      )
    ).json();
    console.log("response.data", response.data);
    setMovies(response.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>The Movies! {movies.length > 0 && <span>({movies.length})</span>}</h1>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {movies.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
