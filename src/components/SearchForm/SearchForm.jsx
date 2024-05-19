import { useEffect, useState } from "react";
import "./SearchForm.css";
import find from "../../assets/find.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addHistory, getUser } from "../../store/reducers/userReducer";
import useDebounce from "../../hooks/useDebounce";
import { useGetMovieBySearchQuery } from "../../services/movie";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("q") || "";
  const user = useSelector(getUser);
  const userHistory = user ? user.history : [];
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(querySearch);
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const sujestDebounceValue = useDebounce(searchValue, 200);
  const handleSearchChange = (e) => setSearchValue(e.target.value);
  const { data: sudjest } = useGetMovieBySearchQuery(sujestDebounceValue);
  
  const handleSearch = (e) => {
    e.preventDefault();
    const search = new FormData(e.target).get("searchRequest").trim();

    if (!userHistory.includes(search)) {
      dispatch(addHistory(search));
    }
  };

  useEffect(() => {
    let trimSearchValue = debouncedSearchValue.trim();
    if (trimSearchValue.length) {
      navigate({
        pathname: "/search",
        search: `q=${debouncedSearchValue}`,
      });
    } else {
      const queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("q")) {
        queryParams.delete("q");
        navigate("/", {
          replace: true,
          search: queryParams.toString(),
        });
      }
    }
  }, [debouncedSearchValue]);
  
  return (
    <section className="search">
      <form
        className="search__form form"
        name="search-saved-movie-form"
        onSubmit={handleSearch}
        noValidate
        autocomplete="off"
      >
        <input
          value={searchValue}
          type="text"
          placeholder="Фильм"
          className="search__input"
          required
          name="searchRequest"
          onChange={handleSearchChange}
        />
        <button type="submit" className="search__button">
          <img src={find} alt="кнопка поиска" />
        </button>
        <div className="sudjest_wrapper">
          {
            sudjest && sudjest.map(({ name, kinopoiskId}) => {
                return <div key={name} onMouseDown={() => navigate(`/movie/${kinopoiskId}`)}>{ name }</div>
            })
          }
      </div>
      </form>
    </section>
  );
};

export default SearchForm;
