import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ( { movie } ) => {
    let navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/detail/${movie.id}`)
    }

    return(
        <>
            <img onClick={handleNavigation} className="movieImg" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.title} poster`}/>
        </>
    );
}

export default Card;