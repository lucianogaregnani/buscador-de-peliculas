import { useState } from 'react'
import searchMovies from '../services/searchMovies'


export default function useMovie({ busqueda }) {
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const newMovies = await searchMovies({ busqueda })
        setMovies(newMovies)
    }

    return {movies, getMovies}
}