import type { PageContextServer } from 'vike/types'

import { getMovieDetails, getMovieList } from '../../../database/starWars'
import type { Movie, MovieDetails } from '../types'

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (
  pageContext: PageContextServer
): Promise<Movie[]> => {
  const movieList = await getMovieList();

  // console.log("get data", { pageContext });

  return movieList;
};
