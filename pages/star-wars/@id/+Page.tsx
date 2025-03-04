import React from 'react'

import { useConfig } from 'vike-react/useConfig'
import { useData } from 'vike-react/useData'

import type { Data } from './+data.js'

export default function Page() {
  const movie = useData<Data>();

  const config = useConfig();

  config({
    // Set <title>
    title: movie.title,
  });

  const {
    release_date,
    id,
    title,

    director,
    producer,
    episode_id,
    opening_crawl,
    characters,
    planets,
    starships,
    vehicles,
    species,
    created,
    edited,
    url,
  } = movie;

  return (
    <>
      <h1>{movie.title}</h1>
      Release Date: {movie.release_date}
      <br />
      Director: {movie.director}
      <br />
      Producer: {movie.producer}
      <br />
      Episode ID: {movie.episode_id}
      <br />
      Opening Crawl: {movie.opening_crawl}
      <br />
      Characters: {movie.characters}
      <br />
      Planets: {movie.planets}
      <br />
      Starships: {movie.starships}
      <br />
      Vehicles: {movie.vehicles}
      <br />
      Species: {movie.species}
      <br />
      Created: {movie.created}
      <br />
      Edited: {movie.edited}
      <br />
      URL: {movie.url}
    </>
  );
}
