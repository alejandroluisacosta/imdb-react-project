
const MovieCard = (props) => {
    return (
        <div>
            <img src={props.image}/>
            <p>{props.title}</p>
        </div>
    )
}

export default MovieCard;