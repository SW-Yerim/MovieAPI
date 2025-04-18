import React from "react";
import { getMoviesDetail } from "../api/movieApi";
import { useQuery } from "@tanstack/react-query";

const useDetails = (id) => {
  return useQuery({
    queryKey: ["movie"],
    queryFn: () => getMoviesDetail(id),
  });
};

export default useDetails;
