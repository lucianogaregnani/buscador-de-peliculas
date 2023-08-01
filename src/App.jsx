import { useEffect, useState } from 'react'
import './App.css'
import Buscador from './components/Buscador'
import Movies from './components/Movies'
import moviesResponse from './mocks/moviesResponse.json'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [error, setError] = useState('')
  const movies = moviesResponse.Search

  const handleChange = (event) => {
    const value = event.target.value
    setBusqueda(value)
  }

  useEffect(() => {
    if(busqueda === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if(busqueda.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)

  }, [busqueda])

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
