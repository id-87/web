import React from 'react'
// import MovieCard from './components/MovieCard'
import Home from './components/pages/Home'

const App = () => {
  const movieNumber=4
  return (
    <>
    {/* conditional rendering */}
    {movieNumber ===1 ? (<MovieCard movie={{title: "Tim's Film", release_date: 2025}}/>) : (<MovieCard movie={{title: "Joe's Film", release_date: 2023}}/>)}
    {/* <Home/> */}
    
    
    </>
  )
}


export default App
