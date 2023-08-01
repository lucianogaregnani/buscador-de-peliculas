import { useEffect, useState } from 'react'
import useErrorBusqueda from './useErrorBusqueda'

export function useBusqueda() {
    const [busqueda, setBusqueda] = useState('')
    const {error} = useErrorBusqueda({ busqueda })

    const handleChange = (event) => {
        const value = event.target.value
        setBusqueda(value)
    }

    return {busqueda, error, handleChange}

}