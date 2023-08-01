import ListOfMovies from "./ListOfMovies"
import noResponseMovies from '../mocks/noResponseMovies.json'

export default function Movies({ movies }) {
    const hasMovies = movies.length > 0

    return(
        hasMovies ? 
            <ListOfMovies movies={movies} /> : 
            <p>{noResponseMovies.Error}</p>
    )
}