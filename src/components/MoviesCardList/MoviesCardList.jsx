import { useDispatch, useSelector } from "react-redux";
import { useGetTopMovieQuery } from "../../services/movie";
import { removeFavorite, addFavorites } from "../../store/reducers/userReducer";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export const MoviesCardList = () => {
  const { 
    data: movies = []
  } = useGetTopMovieQuery();
  const user = useSelector(state => state.user.user);
  const userFavoritsIds = user?.favorits?.map((item) => item.imdbId)
  const dispatch = useDispatch();

  console.log(movies);
  return (
    <section className="cards">
      <ul className="cards__list">
        {movies.map((movie) => {
          const isFavorite = user && userFavoritsIds.includes(movie.imdbId);
          const handleFavoriteClick = () => {
            const payload = {
              imdbId: movie.imdbId,
              posterUrlPreview: movie.posterUrlPreview,
              nameRu: movie.nameRu,
            };
            dispatch(
              isFavorite ?
                  removeFavorite(payload) :
                  addFavorites(payload)
            )
          }

          return (
            <MoviesCard
              key={movie.imdbId}
              isAuth={user}
              isFavorite={isFavorite}
              movie={movie}
              favoriteClick={handleFavoriteClick}
            />
          );
        })} 
      </ul>
    </section>
  );
};