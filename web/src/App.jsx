import React from 'react'
import MovieCard from './components/MovieCard'

const App = () => {
  return (
    <>
    <MovieCard movie={{title: "Tim's Film", release_date: 2025}}/>
    <MovieCard movie={{title: "Joe's Film", release_date: 2023}}/>
    
    </>
  )
}


export default App
