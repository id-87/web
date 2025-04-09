import '../../css/Favorites.css'
import { useMovieContext } from '../../contexts/MovieContext'
import MovieCard from '../MovieCard'

function Favouraites(){

    const {favorites} = useMovieContext()

    if (favorites && favorites.length > 0){
        return <div className='favorites'>
            <h2>Your favourites</h2>
            <div className="movies-grid">
        {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
        ))}
    </div></div>
    }
    return <div className="favorites-empty">
        <h2>No favourite Movies</h2>
        <p>Start adding movies and they appear here</p>
    </div>
}

export default Favouraites