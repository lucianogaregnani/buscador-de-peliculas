import Movie from "./Movie";
import '../movies.css'


export default function ListOfMovies({ movies }) {
    return(
        <ul className="movies">
            {
                movies.map(movie => <Movie key={movie.id} title={movie.title} year={movie.year} poster={movie.poster} />)
            }
        </ul>
    )
}