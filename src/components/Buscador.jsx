export default function Buscador({ busqueda, change, getMovies }) {
    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies()
    }

    return(
        <>
            <h1>Buscador de peliculas</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={change} value={busqueda} placeholder='Buscar pelicula' />
                <button>Buscar</button>
            </form>
        </>
    )
}