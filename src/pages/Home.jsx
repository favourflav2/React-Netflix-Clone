import React from 'react'
import Main from '../componets/Main'
import Row from '../componets/Row'
import { requests } from '../Requests'

export default function Home() {
  return (
    <>
      <Main />
      <Row rowId='1' title='Popular' fetchURL={requests.popular}/>
      <Row rowId='2' title='Top Rated' fetchURL={requests.topRated}/>
      <Row rowId='3' title='Up Coming' fetchURL={requests.upcoming}/>
      <Row rowId='4' title='Popular Tv' fetchURL={requests.tv}/>
      <Row rowId='5' title='Now Playing' fetchURL={requests.nowPlaying}/>
    </>
  )
}

// popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
//     topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
//     upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
//     latest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}`,
//     nowPlaying:
