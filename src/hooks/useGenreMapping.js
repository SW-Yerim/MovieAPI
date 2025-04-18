import React from "react";
import { getMovieGenreMapping } from "../api/movieApi";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => getMovieGenreMapping(),
  });
};

export default useGenres;
