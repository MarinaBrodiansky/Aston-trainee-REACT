import "./MoviesCard.css";
import { useNavigate } from "react-router-dom";

const MoviesCard = ({ movie, isAuth, isFavorite, favoriteClick }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <a className="card__link" target="_blank" href="/#">
        <img
          src={movie.posterUrlPreview}
          alt={`Обложка фильма: ${movie.name}`}
          className="card__image"
        />
      </a>
      <div className="card__name">{movie.nameRu}</div>
      <div
        className="card__other"
        onClick={() => navigate(`/movie/${movie.kinopoiskId}`)}
      >
        Подробнее
        {isAuth && (
          <div
            onClick={favoriteClick}
            style={{ background: isFavorite ? "red" : "green" }}
            className="card__favorite"
          >
            {isFavorite ? "Удалить" : "Добавить"}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesCard;
