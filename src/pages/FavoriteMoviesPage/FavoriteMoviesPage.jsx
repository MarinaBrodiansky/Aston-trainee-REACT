import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FavoriteCardsList } from "../../components/FavoriteCardsList/FavoriteCardsList.jsx";

const FavoriteMoviesPage = () => {
  return (
    <>
      <Header />
      <div className="favorite-movies">
        <div className="favorite-movies__content">
          <FavoriteCardsList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavoriteMoviesPage;
