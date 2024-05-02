import './MovieCard.css'

const MovieCard = (props) => {
    return (
        <div className="MovieCard">
            <img className="MovieCard__image"src={props.image} />
            <div>
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