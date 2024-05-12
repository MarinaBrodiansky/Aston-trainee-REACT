import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../services/movie.js";
import "./MovieDetails.css";

const MovieDetails = () => {
    const { id } = useParams();
    const { isLoading, data } = useGetMovieByIdQuery(id);

    if (isLoading) return "Загрузка"

    return (<div className="movie__wrapper">
        <div className="movie__main-info-wrapper">
            <img src={data.posterUrlPreview} alt=""/>
            <div className="movie_description-wrapper">
                <p className="movie__title">{ data.nameRu }</p>
                <p>{ data.description }</p>
                <div className="movie__characteristics">
                    <p>Год:</p><p>{data.year}</p>
                    <p>Страна:</p> <p>{data.countries.map(({country}) => country).join(', ')}</p>
                </div>
            </div>
        </div>
    </div>)
}

export {
    MovieDetails
}