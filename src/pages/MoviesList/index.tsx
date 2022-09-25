import { FC, useEffect } from "react";
import { useGenreList } from "../../hooks/useGenreList";
import { useMoviesList } from "../../hooks/useMoviesList";
import { useAppTheme } from "../../theme/AppThemeProvider";
import { css, useTheme } from "@emotion/react";
import Shell from "../../components/Shell";
import Dropdown from "../../components/Dropdown";
import Card from "../../components/Card";
import creatImagePath from "../../helpers/creatImagePath";
import Stack from "../../components/elements/Stack";
import Styles from "./Styles";
import Skeleton from "../../components/elements/Skeleton";
import ErrorComponent from "../../components/elements/Error";
import { useNavigate, useParams } from "react-router-dom";

const MoviesList: FC = () => {
  const [genres, genresListStatus] = useGenreList();
  const [movies, moviesListStatus, genre, setGenre] = useMoviesList();
  const navigate = useNavigate();
  const { genreId } = useParams();

  useEffect(() => {
    genreId && setGenre(Number(genreId));
  }, [genreId]);

  return (
    <Shell>
      <Styles>
        <Stack gap={"lg"}>
          <div className="discover">
            <div className="welcome">
              <h1>Welcome,</h1>
              <p>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </p>
            </div>
            <Dropdown
              placeholder="Select Genre"
              defaultValue={
                genres.find((genre) => genre.id == Number(genreId))?.name
              }
              options={genres.map((genre) => ({
                value: String(genre.id),
                label: genre.name,
              }))}
              disabled={!Boolean(genresListStatus.success)}
              onChange={(val) => {
                navigate(`/genre/${val}`);
              }}
              value={String(genre)}
            />
          </div>
          <div className="content">
            <div className="list">
              {moviesListStatus.loading &&
                new Array(8)
                  .fill("")
                  .map((card, i) => (
                    <Skeleton
                      key={i}
                      w={"100%"}
                      h={"24em"}
                      borderRadius={"10px"}
                    />
                  ))}
              {moviesListStatus.success &&
                movies.length > 0 &&
                movies.map((movie) => (
                  <Card
                    key={movie.id}
                    link={"/movie/" + movie.id}
                    title={movie.title}
                    year={new Date(movie.release_date).getUTCFullYear()}
                    poster={creatImagePath(movie.poster_path)}
                  />
                ))}
            </div>
            {moviesListStatus.success && movies.length === 0 && (
              <ErrorComponent
                message={"We don't have items in this category"}
              />
            )}
            {moviesListStatus.error && (
              <ErrorComponent message={moviesListStatus.error} />
            )}
          </div>
        </Stack>
      </Styles>
    </Shell>
  );
};

export default MoviesList;
