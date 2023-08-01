import moviesResponse from '../mocks/moviesResponse.json'


export default function useMovie({ busqueda }) {
    const movies = moviesResponse.Search

    const mappedMovies = movies?.map(movie => (
        {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }
    ))

    return {movies: mappedMovies}
}