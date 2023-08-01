import { useEffect, useRef, useState } from 'react'
import moviesResponse from '../mocks/moviesResponse.json'
const movies = moviesResponse.Search

export function useBusqueda() {
    const [busqueda, setBusqueda] = useState('')
    const [error, setError] = useState('')
    const isFirstInput = useRef(true)

    useEffect(() => {
        if(isFirstInput.current) {
            isFirstInput.current = busqueda === ''
            return
        }

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

    const handleChange = (event) => {
        const value = event.target.value
        setBusqueda(value)
    }

    return {busqueda, error, handleChange, movies}

}