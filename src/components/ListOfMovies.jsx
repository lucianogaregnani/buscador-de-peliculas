import Movie from "./Movie";

export default function ListOfMovies({ movies }) {
    return(
        <ul>
            {
                movies.map(movie => <Movie key={movie.id} title={movie.title} year={movie.year} poster={movie.poster} />)
            }
        </ul>
    )
}