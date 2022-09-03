import "./MovieListContainer.css";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

const MovieListContainer = () => {
    const [movieList, setMovieList] = useState(null);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=e49c07aff9bfbd577496eb9a1ea986af')
        .then((res) => res.json())
        .then((data) => {
            setMovieList(data.results);
        })
        .catch((err) => console.log(err))
    }, [])

    console.log(movieList);

    return(
        <div className="movieContainer">
            {   
                movieList ?
                movieList.map( movie => {
                    return <Card movie={movie} key={movie.id}/>
                })
                :
                null
            }
        </div>
    );
}

export default MovieListContainer;