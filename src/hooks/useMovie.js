import { useState } from 'react'
import searchMovies from '../services/searchMovies'


export default function useMovie({ busqueda }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getMovies = async () => {
        try {
            setLoading(true)
            const newMovies = await searchMovies({ busqueda })
            setMovies(newMovies)
            setLoading(false)
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return {movies, getMovies, error, loading}
}