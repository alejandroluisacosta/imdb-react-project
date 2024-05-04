import { useState, useEffect } from 'react';
import './MovieCard.css'

const MovieCard = (props) => {

    useEffect(() => {
        const elements = document.querySelectorAll(`.${props.class} > *`);
        elements.forEach(element => {
            const originalClass = element.className.split(' ')[0];
            if (props.class === 'MovieCard--grid') {
                element.classList.add(`${originalClass}--grid`);
            } else {
                element.classList.remove(`${originalClass}--grid`);
            }
        });
    }, [props.class]);
    
    
    return (
        <div className={props.class}>
            <img className="MovieCard__image"src={props.image} />
            <div className="MovieCard__info">
                <div>
                    <p className="MovieCard__id">{props.id}.</p>
                    <p className="MovieCard__title">{props.title}</p>
                </div>
                <p className="MovieCard__year">{props.year}</p>
                <p className="MovieCard__duration">{props.duration}</p>
                <div>
                    <p className="MovieCard__rating">{props.rating}</p>
                    <p className="MovieCard__voters">({props.voters})</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;