import { FC } from "react";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useParams } from "react-router-dom";

const Movie: FC = () => {
  const { movieId } = useParams();
  const [movie, status] = useMovieDetails(Number(movieId));

  return (
    <div className="">
      <h1>{movie.title}</h1>
    </div>
  );
};

export default Movie;
