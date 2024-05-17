import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeHistoryItem } from "../../store/reducers/userReducer";
import "./HistorySearchList.css";

export const HistorySearchList = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = user?.history;

  const handleRemove = (e, search) => {
    e.preventDefault();
    dispatch(removeHistoryItem(search));
  };

  return (
    <div className="search__list">
      {history?.length ? (
        history.map((search, idx) => (
          <Link
            className="search__item"
            to={{
              pathname: "/search",
              search: new URLSearchParams({ q: search }).toString(),
            }}
            key={idx}
          >
            {search}
            <div
              onClick={(e) => handleRemove(e, search)}
              className="search__remove"
            >
              Удалить
            </div>
          </Link>
        ))
      ) : (
        <h1 className="search__hint">История пуста</h1>
      )}
    </div>
  );
};
