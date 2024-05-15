import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchForm from "../../components/SearchForm/SearchForm";
import { MoviesCardList } from "../../components/MoviesCardList/MoviesCardList";

const SearchPage = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
};

export default SearchPage;
