import React from 'react'

import { useConfig } from 'vike-react/useConfig'
import { useData } from 'vike-react/useData'

import { FlipBox } from '#components/Flipbox/FlipboxV2'

import type { Data } from './+data'

export default function Page() {
  const movie = useData<Data>();

  const config = useConfig();

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

  config({
    title: title,
  });

  return (
    <FlipBox name="movie-list" className="x x-fill y-hug C">
      <h1>{title}</h1>
      Release Date: {release_date}
      <br />
      Director: {director}x
      <br />
      Producer: {producer}
      <br />
      Episode ID: {episode_id}
      <br />
      Opening Crawl: {opening_crawl}
      <br />
      Characters: {characters}
      <br />
      Planets: {planets}
      <br />
      Starships: {starships}
      <br />
      Vehicles: {vehicles}
      <br />
      Species: {species}
      <br />
      Created: {created}
      <br />
      Edited: {edited}
      <br />
      URL: {url}
    </FlipBox>
  );
}
