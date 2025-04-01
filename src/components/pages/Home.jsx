import MovieCard from "../MovieCard"
import { use, useState } from "react"
import '../../css/Home.css'

function Home(){
const [searchQuery,setSearchQuery]= useState("")

    const movies=[
        {id:1, title: "John Wick", release_date: 2020},  
        {id:2, title: "Terminator", release_date: 1998},  
        {id:3, title: "Matrix", release_date: 1999},  
        {id:4, title: "Inception", release_date: 2010},  
        {id:5, title: "The Dark Knight", release_date: 2008},  
        {id:6, title: "Interstellar", release_date: 2014},  
        {id:7, title: "Gladiator", release_date: 2000},  
        {id:8, title: "Avatar", release_date: 2009},  
        {id:9, title: "Titanic", release_date: 1997},  
        {id:10, title: "The Godfather", release_date: 1972},  
        {id:11, title: "Pulp Fiction", release_date: 1994},  
        {id:12, title: "The Shawshank Redemption", release_date: 1994},  
        {id:13, title: "Fight Club", release_date: 1999},  
        {id:14, title: "Forrest Gump", release_date: 1994},  
        {id:15, title: "The Avengers", release_date: 2012},  
        {id:16, title: "Iron Man", release_date: 2008},  
        {id:17, title: "Deadpool", release_date: 2016},  
        {id:18, title: "Joker", release_date: 2019},  
        {id:19, title: "The Wolf of Wall Street", release_date: 2013},  
        {id:20, title: "Mad Max: Fury Road", release_date: 2015}  

    ]

    const handleSearch= (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("------")

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery) &&

                <MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>
}

export default Home