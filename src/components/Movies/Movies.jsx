import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

import "./Movies.css";

const Movies = () => {
  return (
    <main>
      <section className="movies__page">
        <Header loggedIn={true} />
        <div className="movies__content">
          <SearchForm />

          <MoviesCardList
            isSavedMoviesPage={false}
            movies={movies}
            savedMovies={movies}
          />
        </div>
        <Footer />
      </section>
    </main>
  );
};

export default Movies;
