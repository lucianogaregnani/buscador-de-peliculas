export default function Buscador({ busqueda, change, changeCheck, getMovies }) {
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
                <label htmlFor="name">Ordenar por año</label>
                <input id="name" type="checkbox" onChange={changeCheck} />
            </form>
        </>
    )
}