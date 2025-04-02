import '../../css/Favorites.css'
import { useMovieContext } from '../../contexts/MovieContext'
import MovieCard from '../MovieCard'

function Favouraites(){

    const {favorites} = useMovieContext()

    if (favorites){
        return <div className='favorites'>
            <h2>Your favorites</h2>
            <div className="movies-grid">
        {favorites.map((movie) => (
            movie.title.toLowerCase().startsWith(searchQuery) &&

            <MovieCard movie={movie} key={movie.id}/>))}
    </div></div>
    }
    return <div className="favorites-empty">
        <h2>No favouraite Movies</h2>
        <p>Start adding movies and they appear here</p>
    </div>
}

export default Favouraites