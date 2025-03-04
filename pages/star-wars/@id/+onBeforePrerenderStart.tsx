import { getMovieList } from '../../../database/starWars'
import { MovieDetails } from '../types'

export { onBeforePrerenderStart };

// Run once, provides context object for all pages
async function onBeforePrerenderStart() {
  const moviesData = await getMovieList();

  const moviePageURLs = moviesData.map((movie) => ({
    url: "/star-wars/" + movie.id,
    pageContext: { data: { ...movie } },
  }));

  console.log({ moviePageURLs });
  return moviePageURLs;
}
