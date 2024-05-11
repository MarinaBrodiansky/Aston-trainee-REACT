import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../../store/reducers/userReducer";

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProfile()).unwrap().finally(() => setIsLoading(false));
    }, [])

    if(isLoading) return "Загрузка..."; 
    return children;
  };
  
export default AuthProvider;
  