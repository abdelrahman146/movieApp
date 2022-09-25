import { FC } from "react";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useNavigate, useParams } from "react-router-dom";
import Shell from "../../components/Shell";
import Group from "../../components/elements/Group";
import creatImagePath from "../../helpers/creatImagePath";
import Stack from "../../components/elements/Stack";
import { Calendar, Layout2 } from "tabler-icons-react";
import Styles from "./Styles";
import Button from "../../components/elements/Button";
import Skeleton from "../../components/elements/Skeleton";

const Movie: FC = () => {
  const { movieId } = useParams();
  const [movie, status] = useMovieDetails(Number(movieId));
  const navigate = useNavigate();
  return (
    <Shell>
      <Styles>
        <Button onClick={() => navigate(-1)} size={"md"} variant="dark">
          Back
        </Button>
        <div className="header">
          {status.loading && <Skeleton className="poster" />}
          {status.success && (
            <img
              className="poster"
              src={creatImagePath(movie.poster_path)}
              alt={movie.title}
            />
          )}
          <Stack align="start" gap={"xl"} className="content">
            {status.loading && <Skeleton h="3em" w="50%" borderRadius={5} />}
            {status.success && (
              <h1 className="title">
                {movie?.title} ({new Date(movie.release_date).getUTCFullYear()})
              </h1>
            )}
            {status.loading && <Skeleton h="1.5em" w="30%" borderRadius={5} />}
            {status.success && (
              <Group gap={"xs"}>
                <Calendar
                  size={18}
                  css={(theme) => ({ color: theme.colors.primary[0] })}
                />
                <span className="key">Release Date:</span>
                <span className="value">
                  {new Date(movie?.release_date).toLocaleDateString()}
                </span>
              </Group>
            )}
            {status.loading && <Skeleton h="1.5em" w="30%" borderRadius={5} />}
            {status.success && (
              <Group gap={"xs"}>
                <Layout2
                  size={18}
                  css={(theme) => ({ color: theme.colors.primary[0] })}
                />
                <span className="key">Genre:</span>
                <span className="value">
                  {movie?.genres?.map((genre) => genre.name).join(" / ")}
                </span>
              </Group>
            )}

            {status.loading && (
              <>
                <Skeleton h="1.5em" w="30%" borderRadius={5} />
                <Skeleton h="1.5em" w="100%" borderRadius={5} />
                <Skeleton h="1.5em" w="100%" borderRadius={5} />
                <Skeleton h="1.5em" w="100%" borderRadius={5} />
                <Skeleton h="1.5em" w="50%" borderRadius={5} />
              </>
            )}
            {status.success && (
              <Stack justify="start" align="start" gap={"sm"}>
                <span className="key">Overview:</span>
                <p className="value">{movie?.overview}</p>
              </Stack>
            )}

            {status.loading && (
              <>
                <Skeleton h="1.5em" w="30%" borderRadius={5} />
                <Skeleton h="1.5em" w="20%" borderRadius={5} />
              </>
            )}
            {status.success && (
              <Stack gap={"sm"} align="start">
                <span className="key">Production Companies:</span>
                {movie?.production_companies?.map((company) => (
                  <li key={company.id}>{company.name}</li>
                ))}
              </Stack>
            )}
          </Stack>
        </div>
      </Styles>
    </Shell>
  );
};

export default Movie;
