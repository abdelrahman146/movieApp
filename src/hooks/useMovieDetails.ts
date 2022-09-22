import { useEffect, useState } from "react";
import { getMovie } from "../services/movies";
import { MovieDetails } from "../services/types";
import { Status, useStatus } from "./useStatus";

export const useMovieDetails = (
  movieId: number
): [MovieDetails | Record<string, never>, Status] => {
  const [list, setList] = useState<MovieDetails | Record<string, never>>({});
  const { status, setError, setSuccess, setLoading } = useStatus();

  useEffect(() => {
    let mounted = true;
    setLoading("Loading Movie Details");
    getMovie(movieId).then((res) => {
      if (mounted && res.status === "SUCCESS") {
        setList(res.data);
        setSuccess("Movie Details Recieved");
      }
      if (mounted && res.status === "FAILED") {
        setError(res.data.status_message);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return [list, status];
};
