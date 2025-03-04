// import { useConfig } from 'vike-react/useConfig'

import { useConfig } from 'vike-react/useConfig'

import { MovieDetails } from '../types'

export { onBeforePrerenderStart };

async function onBeforePrerenderStart(test) {
  // https://vike.dev/useConfig
  // const config = useConfig();
  // console.log({ config });

  const response = await fetch(
    "https://brillout.github.io/star-wars/api/films.json"
  );
  const moviesData = (await response.json()) as MovieDetails[];

  const moviePageURLs = moviesData.map((movie) => ({
    url: "/star-wars/" + movie.id,
    pageContext: { data: { ...movie } },
  }));

  console.log({ test, moviePageURLs });
  return moviePageURLs;
}
