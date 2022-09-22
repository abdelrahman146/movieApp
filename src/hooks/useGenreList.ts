import { useEffect, useState } from "react";
import { getGenreList } from "../services/movies";
import { Genre } from "../services/types";
import { Status, useStatus } from "./useStatus";

export const useGenreList = (): [Genre[], Status] => {
  const [list, setList] = useState<Genre[]>([]);
  const { status, setError, setSuccess, setLoading } = useStatus();

  useEffect(() => {
    let mounted = true;
    setLoading("Loading Genre");
    getGenreList().then((res) => {
      if (mounted && res.status === "SUCCESS") {
        setList(res.data.genres);
        setSuccess("Genre Recieved");
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
