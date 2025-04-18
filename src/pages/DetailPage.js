import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMoviesDetail } from "../api/movieApi";
import Loading from "../component/common/loading/Loading";
import ErrorMessage from "../component/common/ErrorMessage";

const DetailPage = () => {
  const { id } = useParams();
  console.log("id", id);

  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => getMoviesDetail(id),
  });

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <ErrorMessage message={error.message} />}
      {movies && (
        <div>
          <h1>Detail</h1>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
