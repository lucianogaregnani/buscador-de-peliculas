import { useState } from 'react'
import useErrorBusqueda from './useErrorBusqueda'

export function useBusqueda() {
    const [busqueda, setBusqueda] = useState('')
    const [check, setCheck] = useState(false)

    const {error} = useErrorBusqueda({ busqueda })

    const handleChange = (event) => {
        const value = event.target.value
        setBusqueda(value)
    }

    const handleChangeText = (event) => {
        setCheck(!check)
    }

    return {busqueda, error, handleChange, handleChangeText, check}

}