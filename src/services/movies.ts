import { get } from "./requests";
import { GenreList, MovieDetails, MovieList } from "./types";

export const getGenreList = async (cached = true) => {
  return await get<GenreList>("/genre/movie/list", cached);
};

export const getMoviesList = async (genre?: number, cached = true) => {
  return await get<MovieList>("/discover/movie", cached, {
    ...(genre ? { params: { with_genres: String(genre) } } : {}),
  });
};

export const getMovie = async (movieId: number, cached = true) => {
  return await get<MovieDetails>("/movie/" + movieId, cached);
};
