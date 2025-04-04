import { useParams } from "react-router-dom";
import React, { useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  console.log("id", id);

  const getMovie = async () => {
    const response = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log("response", response.data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
};

export default Detail;
