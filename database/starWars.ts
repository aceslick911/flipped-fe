import { Movie, MovieDetails } from '../pages/star-wars/types'

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const response = await fetch(
    `https://brillout.github.io/star-wars/api/films/${id}.json`
  );
  const movie = (await response.json()) as MovieDetails;

  return movie;
};

export const getMovieList = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://brillout.github.io/star-wars/api/films.json"
  );
  const moviesData = (await response.json()) as Movie[];
  return moviesData;
};
