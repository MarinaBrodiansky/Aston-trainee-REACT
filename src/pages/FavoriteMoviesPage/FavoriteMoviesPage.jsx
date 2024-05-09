import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Footer from "../../components/Footer/Footer";

/* Для хранения учетных записей пользователей, их Избранного и Истории поиска, 
используем LocalStorage. redux-persist библиотеку использовать нельзя из-за того, 
что привнесется большая автоматизация процесса сохранения, и это будет неравносильно 
затратам по времени других людей, которые используют LocalStorage напрямую. */

const FavoriteMoviesPage = () => {
    return (
        <>
        <div className="favorite-movies">
            <div className="favorite-movies__content">
                <Header/>
                <SearchForm/>
                <MoviesCardList/>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default FavoriteMoviesPage;