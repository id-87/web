import '../css/MovieCard.css'

function MovieCard({movie}){
    function onLike(){
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="mpvoe-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className="Like-button" onClick={onLike}> Like </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>

    </div>
}

export default MovieCard