import { useData } from 'vike-react/useData'

import { Link } from '#components/Link'

import { IndexData } from '../@id/+onBeforePrerenderStart'

export default function Page() {
  const movies = useData<IndexData>();
  console.log("Movies", movies);
  return (
    <>
      <h1>Star Wars Movies</h1>
      <ol>
        {movies.map(({ id, title, release_date }) => (
          <li key={id}>
            <Link href={`/star-wars/${id}`}>{title}</Link> ({release_date})
          </li>
        ))}
      </ol>
      <p>
        Source:{" "}
        <a href="https://brillout.github.io/star-wars">
          brillout.github.io/star-wars
        </a>
        .
      </p>
    </>
  );
}
