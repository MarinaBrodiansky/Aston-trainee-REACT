import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useGetMovieQuery } from "../../services/movie";
import { removeFavorite, addFavorites } from "../../store/reducers/userReducer";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export const MoviesCardList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");
  const { data: movies = [], isLoading } = useGetMovieQuery(search);
  const user = useSelector((state) => state.user.user);
  const userFavoritsIds = user?.favorits?.map((item) => item.kinopoiskId);
  const dispatch = useDispatch();

  if (isLoading) {
    return <h1 className="cards__hint">Загрузка</h1>;
  }
  return (
    <section className="cards">
      {movies.length ? (
        <ul className="cards__list">
          {movies.map((movie) => {
            const isFavorite =
              user && userFavoritsIds.includes(movie.kinopoiskId);
            const handleFavoriteClick = (e) => {
              e.stopPropagation();
              const payload = {
                kinopoiskId: movie.kinopoiskId,
                posterUrlPreview: movie.posterUrlPreview,
                nameRu: movie.nameRu,
              };
              dispatch(
                isFavorite ? removeFavorite(payload) : addFavorites(payload)
              );
            };

            return (
              <MoviesCard
                key={movie.kinopoiskId}
                isAuth={user}
                isFavorite={isFavorite}
                movie={movie}
                favoriteClick={handleFavoriteClick}
              />
            );
          })}
        </ul>
      ) : (
        <h1 className="cards__hint">Фильмы не найдены</h1>
      )}
    </section>
  );
};
