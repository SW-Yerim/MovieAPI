import React from "react";
import { getMoviesTop } from "../api/movieApi";
import { useQuery } from "@tanstack/react-query";

const useTops = () => {
  return useQuery({
    queryKey: ["movies", "top"],
    queryFn: () => getMoviesTop(),
  });
};

export default useTops;
