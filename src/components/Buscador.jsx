export default function Buscador({ busqueda, change }) {
    return(
        <>
            <h1>Buscador de peliculas</h1>
            <form>
                <input type="text" onChange={change} value={busqueda} placeholder='Buscar pelicula' />
                <button>Buscar</button>
            </form>
        </>
    )
}