import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMoviesSearch } from "../api/movieApi";

const useSearch = (searchWord, options = {}) => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => getMoviesSearch(searchWord),
    enabled: !!searchWord,
    ...options,
  });
};

export default useSearch;
