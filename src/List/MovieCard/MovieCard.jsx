import { useState, useEffect } from 'react';
import './MovieCard.css'

const MovieCard = (props) => {

    useEffect(() => {
        const elements = document.querySelectorAll(`.${props.class} *`);
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
                <p className="MovieCard__title">{props.id}. {props.title}</p>
                <p className="MovieCard__yearAndDuration">{props.year}&nbsp;&nbsp;&nbsp;{props.duration}</p>
                <p className="MovieCard__ratingAndVoters">{props.rating}&nbsp;&nbsp;&nbsp;({props.voters})</p>
            </div>
        </div>
    )
}

export default MovieCard;