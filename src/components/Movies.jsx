import ListOfMovies from "./ListOfMovies"
import '../movies.css'

export default function Movies({ movies }) {
    const hasMovies = movies?.length > 0

    return(
        hasMovies ? 
            <ListOfMovies movies={movies} /> : 
            <p>No hay peliculas con ese nombre!</p>
    )
}