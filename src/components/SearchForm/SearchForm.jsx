import "./SearchForm.css";
import find from "../../assets/find.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addHistory } from "../../store/reducers/userReducer";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("q") || "";
  const user = useSelector((state) => state.user?.user);
  const userHistory = user ? user.history : [];
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(querySearch);
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const handleSearchChange = (e) => setSearchValue(e.target.value);

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
      </form>
    </section>
  );
};

export default SearchForm;
