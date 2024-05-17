import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export const ProtectedRoute = ({ children }) => {
    const user = useSelector(state => state.user.user);
    const navigate = useNavigate();

    if(!user) {
        navigate("/")
    }

    return children;

};