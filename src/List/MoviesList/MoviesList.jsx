import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MoviesList.css'

const movies = [
    {
      id: 1,
      title: "Inception",
      image: "src/assets/interstellar.jpeg",
      year: 2010,
      duration: "2h 28min",
      rating: 8.8,
      voters: "1.9M"
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      image: "src/assets/interstellar.jpeg",
      year: 1994,
      duration: "2h 22min",
      rating: 9.3,
      voters: "2.3M"
    },
    {
      id: 3,
      title: "The Godfather",
      image: "src/assets/interstellar.jpeg",
      year: 1972,
      duration: "2h 55min",
      rating: 9.2,
      voters: "2.0M"
    },
    {
      id: 4,
      title: "Pulp Fiction",
      image: "src/assets/interstellar.jpeg",
      year: 1994,
      duration: "2h 34min",
      rating: 8.9,
      voters: "2.1M"
    },
    {
      id: 5,
      title: "The Dark Knight",
      image: "src/assets/interstellar.jpeg",
      year: 2008,
      duration: "2h 32min",
      rating: 9.0,
      voters: "2.5M"
    },
    {
      id: 6,
      title: "Schindler's List",
      image: "src/assets/interstellar.jpeg",
      year: 1993,
      duration: "3h 15min",
      rating: 8.9,
      voters: "1.8M"
    },
    {
      id: 7,
      title: "The Lord of the Rings: The Return of the King",
      image: "src/assets/interstellar.jpeg",
      year: 2003,
      duration: "3h 21min",
      rating: 8.9,
      voters: "1.7M"
    },
    {
      id: 8,
      title: "Fight Club",
      image: "src/assets/interstellar.jpeg",
      year: 1999,
      duration: "2h 19min",
      rating: 8.8,
      voters: "2.0M"
    },
    {
      id: 9,
      title: "Forrest Gump",
      image: "src/assets/interstellar.jpeg",
      year: 1994,
      duration: "2h 22min",
      rating: 8.8,
      voters: "2.1M"
    },
    {
      id: 10,
      title: "The Matrix",
      image: "src/assets/interstellar.jpeg",
      year: 1999,
      duration: "2h 16min",
      rating: 8.7,
      voters: "2.3M"
    },
    {
      id: 11,
      title: "Goodfellas",
      image: "src/assets/interstellar.jpeg",
      year: 1990,
      duration: "2h 26min",
      rating: 8.7,
      voters: "1.8M"
    },
    {
      id: 12,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      image: "src/assets/interstellar.jpeg",
      year: 2001,
      duration: "2h 58min",
      rating: 8.8,
      voters: "1.8M"
    },
    {
      id: 13,
      title: "The Silence of the Lambs",
      image: "src/assets/interstellar.jpeg",
      year: 1991,
      duration: "1h 58min",
      rating: 8.6,
      voters: "1.7M"
    },
    {
      id: 14,
      title: "Se7en",
      image: "src/assets/interstellar.jpeg",
      year: 1995,
      duration: "2h 7min",
      rating: 8.6,
      voters: "2.0M"
    },
    {
      id: 15,
      title: "The Usual Suspects",
      image: "src/assets/interstellar.jpeg",
      year: 1995,
      duration: "1h 46min",
      rating: 8.5,
      voters: "1.9M"
    },
    {
      id: 16,
      title: "Léon: The Professional",
      image: "src/assets/interstellar.jpeg",
      year: 1994,
      duration: "2h 13min",
      rating: 8.5,
      voters: "1.6M"
    },
    {
      id: 17,
      title: "The Lion King",
      image: "src/assets/interstellar.jpeg",
      year
  
  : 1994,
      duration: "1h 28min",
      rating: 8.5,
      voters: "2.4M"
    },
    {
      id: 18,
      title: "Saving Private Ryan",
      image: "src/assets/interstellar.jpeg",
      year: 1998,
      duration: "2h 49min",
      rating: 8.6,
      voters: "1.8M"
    },
    {
      id: 19,
      title: "Interstellar",
      image: "src/assets/interstellar.jpeg",
      year: 2014,
      duration: "2h 49min",
      rating: 8.6,
      voters: "1.6M"
    },
    {
      id: 20,
      title: "The Green Mile",
      image: "src/assets/interstellar.jpeg",
      year: 1999,
      duration: "3h 9min",
      rating: 8.6,
      voters: "1.9M"
    },
    {
      id: 21,
      title: "The Pianist",
      image: "src/assets/interstellar.jpeg",
      year: 2002,
      duration: "2h 30min",
      rating: 8.5,
      voters: "1.5M"
    },
    {
      id: 22,
      title: "Gladiator",
      image: "src/assets/interstellar.jpeg",
      year: 2000,
      duration: "2h 35min",
      rating: 8.5,
      voters: "1.7M"
    },
    {
      id: 23,
      title: "The Departed",
      image: "src/assets/interstellar.jpeg",
      year: 2006,
      duration: "2h 31min",
      rating: 8.5,
      voters: "1.8M"
    },
    {
      id: 24,
      title: "The Prestige",
      image: "src/assets/interstellar.jpeg",
      year: 2006,
      duration: "2h 10min",
      rating: 8.5,
      voters: "1.6M"
    },
    {
      id: 25,
      title: "The Intouchables",
      image: "src/assets/interstellar.jpeg",
      year: 2011,
      duration: "1h 52min",
      rating: 8.5,
      voters: "1.4M"
    }
  ];

const MoviesList = (props) => {
    const [cardClass, setCardClass] = useState('MovieCard');
    
    useEffect(() => {
      if (props.display === 'MovieListFlex') {
          setCardClass('MovieCard');
      } else {
          setCardClass('MovieCard--grid');
      }
    }, [props.display]);
    
    return (
        <div className={props.display}>
            {movies.map((movie, index) => 
                <MovieCard class={cardClass} title={movie.title} image={movie.image} year={movie.year} duration={movie.duration} rating={movie.rating} voters={movie.voters} key={movie.id} id={movie.id}/>
            )}
        </div>
    )
}

export default MoviesList;