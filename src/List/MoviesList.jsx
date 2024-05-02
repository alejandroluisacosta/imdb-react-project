import MovieCard from "./MovieCard";

const movies = [
    {
      id: 1,
      title: "Inception",
      image: '../assets.interstellar.jpeg'
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      image: '../assets.interstellar.jpeg'
    },
    {
      id: 3,
      title: "The Godfather",
      image: '../assets.interstellar.jpeg'
    },
    {
      id: 4,
      title: "Pulp Fiction",
      image: '../assets.interstellar.jpeg'
    },
    {
      id: 5,
      title: "The Dark Knight",
      image: '../assets.interstellar.jpeg'
    }
  ];

const MoviesList = () => {
    return (
        <div>
            {movies.map((movie, index) => 
                <MovieCard title={movie.title} image={movie.image} id={index}/>
            )}
        </div>
    )
}

export default MoviesList;