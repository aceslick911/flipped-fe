import { Counter } from './Counter';

export default function Page() {
  return (
    <>
      <h1>Flipped Energy</h1>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
