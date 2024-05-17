import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FavoriteCardsList } from "../../components/FavoriteCardsList/FavoriteCardsList.jsx";

const FavoriteMoviesPage = () => {
  return (
    <>
      <div className="favorite-movies">
        <div className="favorite-movies__content">
          <Header />
          <FavoriteCardsList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavoriteMoviesPage;
