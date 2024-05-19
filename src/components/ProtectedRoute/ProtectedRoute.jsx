import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../store/reducers/userReducer";

export const ProtectedRoute = ({ children }) => {
  const user = useSelector(getUser);

  if(!user) {
    return <div>Страница только для авторизованных пользователей. <Link to="/signin">Войти</Link></div>
  }

  return children;
};
