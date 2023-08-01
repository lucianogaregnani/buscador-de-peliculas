import { useEffect, useRef, useState } from "react";

export default function useErrorBusqueda({ busqueda }) {
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

    return {error}
}