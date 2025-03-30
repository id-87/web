function MovieCard({movie}){
    function onLike(){
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="mpvoe-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="Like-button" onClick={onLike}> Like </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>

    </div>
}

export default MovieCard