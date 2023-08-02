const API_KEY = 'e171b73d'

export default async function searchMovies({ busqueda }) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${busqueda}`)
        const json = await response.json()
    
        const mappedMovies = json.Search?.map(movie => (
            {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster
            }
        ))
    
        return mappedMovies
    } catch (error) {
        throw new Error('Error')
    }
}