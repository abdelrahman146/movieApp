import { FC } from "react";
import { useGenreList } from "../../hooks/useGenreList";
import { useMoviesList } from "../../hooks/useMoviesList";
import { Link } from "react-router-dom";
const MoviesList: FC = () => {
  const [genres, genresListStatus] = useGenreList();
  const [movies, moviesListStatus, genre, setGenre] = useMoviesList();

  return (
    <div className="">
      <select onChange={(e) => setGenre(Number(e.target.value))} value={genre}>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={"/movie/" + movie.id}>
              {movie.title} - {new Date(movie.release_date).getUTCFullYear()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
