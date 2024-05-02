import MoviesList from "./MoviesList";

const ListContainer = () => {
    return (
        <>
            <h2>Tablas de IMDb</h2>
            <h1>Las 250 mejores películas de IMDb</h1>
            <p>Según la calificación de los votantes habituales de IMDb</p>
            <div>
                <div>
                    <p>250 títulos</p>
                    <button>Filtrar</button>
                </div>
                <div>
                    <button id="flexDisplay">flex</button>
                    <button id="gridDisplay">grid</button>
                    <button>other</button>
                </div>
            </div>
            <MoviesList/>
        </>
    )
}

export default ListContainer;