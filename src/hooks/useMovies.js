import React from "react";
import { getMovies } from "../api/movieApi";
import { useQuery } from "@tanstack/react-query";

const useMovies = () => {
  return useQuery({
    queryKey: ["movies", "main"],
    queryFn: () => getMovies(),
  });
};

export default useMovies;
