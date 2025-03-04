// https://vike.dev/data

import { useConfig } from 'vike-react/useConfig'
import type { PageContextServer } from 'vike/types'

import { getMovieDetails } from '../../../database/starWars'
import type { MovieDetails } from '../types.js'

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (
  pageContext: PageContextServer
): Promise<MovieDetails> => {
  const movie = await getMovieDetails(pageContext.routeParams.id);

  // const config = useConfig();

  // config({
  //   title: movie.title,
  // });
  return movie;
};
