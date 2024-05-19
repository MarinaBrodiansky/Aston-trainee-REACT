import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";
import { UserService } from "../../services/user";
import { getUser } from "../../store/reducers/userReducer";

const Navigation = () => {
  const user = useSelector(getUser);

  if (!user) {
    return (
      <nav className="navigation">
        <ul className="navigation__auth">
          <li>
            <Link to="/signup">
              <button className="navigation__button" type="button">
                Регистрация
              </button>
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <button className="navigation__button" type="button">
                Войти
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="navigation">
      <Link to="/history">История поиска</Link>
      <Link to="/favorite-movies">Избранные фильмы</Link>
      <button
        className="navigation__button"
        style={{ marginLeft: 20 }}
        type="button"
        onClick={UserService.logout}
      >
        Выйти
      </button>
    </nav>
  );
};

export default Navigation;
