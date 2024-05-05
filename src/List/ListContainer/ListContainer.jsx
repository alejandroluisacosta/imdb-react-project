import { useState } from "react";
import './ListContainer.css'
import MoviesList from "../MoviesList/MoviesList";
import MoreToExplore from "../MoreToExplore/MoreToExplore";

const ListContainer = () => {
    
    const [display, setDisplay] = useState("MovieListFlex");
    
    const clickGridButtonHandler = () => {
        setDisplay('MovieListGrid');
    }

    const clickFlexButtonHandler = () => {
        setDisplay('MovieListFlex')
    }

    return (
        <div class="InfoContainer">
            <h2>Tablas de IMDb</h2>
            <h1>Las 250 mejores películas de IMDb</h1>
            <p>Según la calificación de los votantes habituales de IMDb</p>
            <div className="ListsContainer">
            <div className="InfoContainer__buttonsContainer">
                <div className="InfoContainer__buttonsContainer__filterContainer">
                    <p>250 títulos</p>
                    <button>Filtrar</button>
                </div>
                <div className="InfoContainer__buttonsContainer__displayButtonsContainer">
                    <button id="flexDisplay" onClick={clickFlexButtonHandler}>flex</button>
                    <button id="gridDisplay" onClick={clickGridButtonHandler}>grid</button>
                    <button>other</button>
                </div>
            </div>
            <MoviesList display={display}/>
            <MoreToExplore className="MoreToExplore"/>
            </div>
        </div>
    )
}

export default ListContainer;