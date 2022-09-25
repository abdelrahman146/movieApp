import { useEffect, useState } from "react";
import { getMoviesList } from "../services/movies";
import { Movie } from "../services/types";
import { Status, useStatus } from "./useStatus";

export const useMoviesList = (): [
  Movie[],
  Status,
  number,
  (genreId: number) => void
] => {
  const [genre, setGenre] = useState(0);
  const [list, setList] = useState<Movie[]>([]);
  const { status, setError, setSuccess, setLoading } = useStatus();

  useEffect(() => {
    let mounted = true;
    setLoading("Loading Movies");
    getMoviesList(genre ? genre : undefined).then((res) => {
      if (mounted && res.status === "SUCCESS") {
        setList(res.data.results);
        setSuccess("Movies Recieved");
      }
      if (mounted && res.status === "FAILED") {
        setError(res.data.status_message);
      }
    });
    return () => {
      mounted = false;
    };
  }, [genre]);

  return [list, status, genre, setGenre];
};
