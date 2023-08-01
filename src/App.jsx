import './App.css'
import Buscador from './components/Buscador'
import Movies from './components/Movies'
import { useBusqueda } from './hooks/useBusqueda'
import useMovie from './hooks/useMovie'


function App() {
  const { busqueda, error, handleChange } = useBusqueda()
  const { movies } = useMovie({ busqueda })

  return (
    <div className='contenedor'>
      <header>
        <Buscador busqueda={busqueda} change={handleChange} />
        {error && <p>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
