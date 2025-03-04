import type { PageContextServer } from 'vike/types'

import { getMovieDetails } from '../../../database/starWars'
import type { MovieDetails } from '../types'

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (
  pageContext: PageContextServer
): Promise<MovieDetails> => {
  console.log("get ID", pageContext.routeParams.id, { pageContext });
  const movie = await getMovieDetails(pageContext.routeParams.id);
  return movie;
};
