import { useState } from "react";
import MoviesList from "../MoviesList/MoviesList";

const ListContainer = () => {
    
    const [display, setDisplay] = useState("MovieListFlex");
    
    const clickGridButtonHandler = () => {
        setDisplay('MovieListGrid');
    }

    const clickFlexButtonHandler = () => {
        setDisplay('MovieListFlex')
    }

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
                    <button id="flexDisplay" onClick={clickFlexButtonHandler}>flex</button>
                    <button id="gridDisplay" onClick={clickGridButtonHandler}>grid</button>
                    <button>other</button>
                </div>
            </div>
            <MoviesList display={display}/>
        </>
    )
}

export default ListContainer;