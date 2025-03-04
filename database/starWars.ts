import { Movie, MovieDetails } from '../pages/star-wars/types'

export const getMovieList = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://brillout.github.io/star-wars/api/films.json"
  );

  const data = await response.json();
  const moviesData = Object.entries(data).map(([index, mv]) => {
    const movie: Movie = mv as any;
    const urlParams = movie.url.split("/");

    const id = urlParams[urlParams.length - 2];

    return {
      ...(movie as any as Movie),
      id,
    };
  }) as unknown as Movie[];

  console.log("getMovieList", moviesData);
  return moviesData;
};

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const url = `https://brillout.github.io/star-wars/api/films/${id}.json`;
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    const movie = { ...data, id: id } as MovieDetails;

    // console.log("getMovieDetails", movie);

    return movie;
  } catch (e) {
    console.error(url, e);
    throw e;
  }
};
