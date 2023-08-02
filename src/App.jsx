import './App.css'
import Buscador from './components/Buscador'
import Movies from './components/Movies'
import { useBusqueda } from './hooks/useBusqueda'
import useMovie from './hooks/useMovie'


function App() {
  const { busqueda, error, handleChange } = useBusqueda()
  const { movies, getMovies, loading } = useMovie({ busqueda })

  return (
    <div className='contenedor'>
      <header>
        <Buscador busqueda={busqueda} change={handleChange} getMovies={getMovies} />
        {error && <p>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
