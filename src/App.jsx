import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MovieCard from './components/MovieCard'
import Home from './components/pages/Home'
import { MovieProvider } from './contexts/MovieContext'
import Favouraites from './components/pages/favorites'
import './css/App.css'
import Navbar from './components/Navbar'
const App = () => {
  
  return (
    <MovieProvider>
    <Navbar/>
    <main className='main-content'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favouraites" element={<Favouraites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
    
}
export default App
