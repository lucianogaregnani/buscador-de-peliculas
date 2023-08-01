import Movie from "./Movie";

export default function ListOfMovies({ movies }) {
    return(
        <ul>
            {
                movies.map(movie => <Movie key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />)
            }
        </ul>
    )
}