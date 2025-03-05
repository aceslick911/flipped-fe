import type { PageContextServer } from 'vike/types';

import { getMovieList } from '../../../database/starWars';
import type { Movie } from '../types';

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer): Promise<Movie[]> => {
  const movieList = await getMovieList();

  return movieList;
};
