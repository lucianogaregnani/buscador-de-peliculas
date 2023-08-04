import { useCallback, useMemo, useRef, useState } from 'react'
import searchMovies from '../services/searchMovies'

export default function useMovie({ busqueda, check }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const busquedaAnterior = useRef(busqueda)

    const getMovies = useCallback(async () => {
        if(busqueda === busquedaAnterior.current) return

        try {
            setLoading(true)
            busquedaAnterior.current = busqueda
            const newMovies = await searchMovies({ busqueda })
            setMovies(newMovies)
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }, [busqueda])

    const sortedMovies = useMemo(() => check ? [...movies].sort((a, b) => a.year - b.year)
                                            : movies, [check, movies])

    return {movies: sortedMovies , getMovies, error, loading}
}