export default function Movie({ title, year, poster }) {
    return(
        <li>
            <h3>{title}</h3>
            <p>{year}</p>
            <img src={poster} />
        </li>
    )
}