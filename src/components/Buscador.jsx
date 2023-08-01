export default function Buscador({ busqueda }) {
    return(
        <>
            <h1>Buscador de peliculas</h1>
            <form>
                <input type="text" value={busqueda} placeholder='Buscar pelicula' />
                <button>Buscar</button>
            </form>
        </>
    )
}