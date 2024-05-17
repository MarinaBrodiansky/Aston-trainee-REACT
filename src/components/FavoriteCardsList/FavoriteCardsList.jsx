import { useDispatch, useSelector } from "react-redux";
import "./FavoriteCardsList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import { removeFavorite } from "../../store/reducers/userReducer.js";

const FavoriteCardsList = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const favorits = user?.favorits || [];

  return (
    <>
    
    <div className="favorites__list">
      {favorits?.length ? (
        <>
          <div className="favorites__header">Избранные фильмы</div>
          {favorits.map((movie) => (
            <MoviesCard
              movie={movie}
              isFavorite={true}
              isAuth={true}
              key={movie.kinopoiskId}
              favoriteClick={(e) => {
                e.stopPropagation();
                dispatch(removeFavorite(movie));
              }}
            />
          ))}
        </>
      ) : (
        <div className="favorites__hint">Нет избранных фильмов </div>
      )}
    </div>
    </>
  );
};

export { FavoriteCardsList };
