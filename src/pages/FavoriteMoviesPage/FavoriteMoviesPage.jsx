import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FavoriteCardsList } from "../../components/FavoriteCardsList/FavoriteCardsList.jsx";

const FavoriteMoviesPage = () => {
  return (
    <>
      <Header />
      <FavoriteCardsList />
      <Footer />
    </>
  );
};

export default FavoriteMoviesPage;
