import './App.css'
import Buscador from './components/Buscador'
import ListOfMovies from './components/ListOfMovies'
import Movies from './components/Movies'
import moviesResponse from './mocks/moviesResponse.json'
import noResponseMovies from './mocks/noResponseMovies.json'

function App() {
  const movies = moviesResponse.Search

  return (
    <div className='contenedor'>
      <header>
        <Buscador busqueda=''/>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
