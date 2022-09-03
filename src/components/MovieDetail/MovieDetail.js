import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetail = () => {
    let { movieID } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=e49c07aff9bfbd577496eb9a1ea986af`)
            .then((res) => res.json())
            .then((data) =>{
                setMovieDetail(data);
            })
            .catch((err) => console.log(err))
    }, [movieDetail])

    return(
        movieDetail &&
        <div className="movieDetail">
            <div className="movieDetail_card">
                <img alt={`${movieDetail.title} poster`} src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}/>
                <div>
                    <h3 className="movieDetail_title">{movieDetail.title}</h3>
                    <p className="movieDetail_overview">{movieDetail.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;