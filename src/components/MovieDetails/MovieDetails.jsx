import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../services/movie.js";
import "./MovieDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, addFavorites, getUser } from "../../store/reducers/userReducer";

const MovieDetails = () => {
  const { id } = useParams();
  const { isLoading, data } = useGetMovieByIdQuery(id);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const isFavorite = user && user.favorits.find(({kinopoiskId}) => kinopoiskId == id);


  const handleFavoriteClick = () => {
    const payload = {
      kinopoiskId: data.kinopoiskId,
      posterUrlPreview: data.posterUrlPreview,
      nameRu: data.nameRu,
    };
    dispatch(isFavorite ? removeFavorite(payload) : addFavorites(payload))
  };


  if (isLoading) return "Загрузка";

  return (
    <div className="movie__wrapper">
      <div className="movie__main-info-wrapper">
        <img src={data.posterUrlPreview} alt="" />
        <div className="movie_description-wrapper">
          <p className="movie__title">{data.nameRu}</p>
          <p>{data.description}</p>
          <div className="movie__characteristics">
            <p>Год:</p>
            <p>{data.year}</p>
            <p>Страна:</p>{" "}
            <p>{data.countries.map(({ country }) => country).join(", ")}</p>
          </div>
          {
            user && data &&
            (<div onClick={handleFavoriteClick} style={{ background: isFavorite ? "red" : "green" }} className="movie__toggle-favorit-btn">
              {
                isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'
              }
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export { MovieDetails };
