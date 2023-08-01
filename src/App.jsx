import './App.css'
import Buscador from './components/Buscador'
import moviesResponse from './mocks/moviesResponse.json'
import noResponseMovies from './mocks/noResponseMovies.json'

function App() {
  const movies = moviesResponse.Search
  const hasMovies = movies.length > 0

  return (
    <div className='contenedor'>
      <header>
        <Buscador busqueda=''/>
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
