import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import logo from "../../assets/header-logo.svg";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const Header = ({ loggedIn }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className={`header header_${theme}`}>
      <Link to="/">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>

      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={theme === "light"}
          onChange={handleChangeTheme}
        />
        <label
          htmlFor="checkbox"
          className={`checkbox-label checkbox-label_${theme}`}
        >
          <span className="ball"></span>
        </label>
      </div>

      <Navigation loggedIn={loggedIn} />
    </header>
  );
};

export default Header;
