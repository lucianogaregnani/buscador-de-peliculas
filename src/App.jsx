import './App.css'
import moviesResponse from './mocks/moviesResponse.json'
import noResponseMovies from './mocks/noResponseMovies.json'

function App() {
  const movies = moviesResponse.Search
  const hasMovies = movies.length > 0

  return (
    <div className='contenedor'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form>
          <input type="text" placeholder='Buscar pelicula' />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies ? (
            <ul>
              {
                movies.map(movie =>
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} />
                  </li>
                )
              }
            </ul>
          ) :
          <p>{noResponseMovies.Error}</p>
        }
      </main>
    </div>
  )
}

export default App
