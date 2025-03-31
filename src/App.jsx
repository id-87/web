import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MovieCard from './components/MovieCard'
import Home from './components/pages/Home'
import Favouraites from './components/pages/favouraites'
import './index.css'
import Navbar from './components/Navbar'
const App = () => {
  
  return (
    <div>
    <Navbar/>
    <main className='main-content'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favouraites" element={<Favouraites/>}/>
      </Routes>
    </main>
    </div>
  )
    
}
export default App
