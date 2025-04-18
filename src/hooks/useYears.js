import React from "react";
import { getMoviesYears } from "../api/movieApi";
import { useQuery } from "@tanstack/react-query";

const useYears = (year, options = {}) => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => getMoviesYears(year),
    ...options,
  });
};

export default useYears;
