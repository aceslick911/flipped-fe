import { getMovieList } from '../../../database/starWars'
import { Movie, MovieDetails } from '../types'

export { onBeforePrerenderStart };

export type IndexData = Movie[];
export type MovieData = MovieDetails & { url: `/star-wars/${number}` };

// export type PageContextDatas = [IndexData, ...MovieData[]];

async function onBeforePrerenderStart() {
  const movieList = await getMovieList();

  const pageContexts = [
    // Provide data for /star-wars
    // {
    //   url: "/star-wars",
    //   pageContext: { data: movieList },
    // },
    // Provide urls for /star-wars/@id
    ...movieList.map((movie) => ({
      url: `/star-wars/${movie.id}`,
    })),
  ];

  return pageContexts;
}
