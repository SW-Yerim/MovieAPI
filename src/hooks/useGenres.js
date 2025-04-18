import React from "react";
import { getMoviesGenres } from "../api/movieApi";
import { useQuery } from "@tanstack/react-query";

const useGenres = (id, options = {}) => {
  return useQuery({
    queryKey: ["movies", id],
    queryFn: () => getMoviesGenres(id),
    enabled: !!id,
    ...options,
  });
};

export default useGenres;
