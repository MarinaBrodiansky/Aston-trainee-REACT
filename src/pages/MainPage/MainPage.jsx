import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import Footer from "../../components/Footer/Footer";
import { MoviesCardList } from "../../components/MoviesCardList/MoviesCardList";

const MainPage = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
};

export default MainPage;
