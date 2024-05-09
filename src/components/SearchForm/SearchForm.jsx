import './SearchForm.css';
import find from '../../assets/find.svg';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = (new FormData(e.target)).get("searchRequest");
    navigate({
      pathname: "search",
      search: `q=${search}`
    })
  }

  return (
    <section className='search'>
      <form
        className='search__form form'
        name='search-saved-movie-form'
        onSubmit={handleSearch}
        noValidate
      >
        <input
          type='text'
          placeholder='Фильм'
          className='search__input'
          required
          name='searchRequest'
        />
        <button type='submit' className='search__button'>
          <img src={find} alt='кнопка поиска' />
        </button>    
      </form>      
    </section>
  );
};

export default SearchForm;