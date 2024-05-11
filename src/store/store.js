import { configureStore } from "@reduxjs/toolkit";
import { movieService } from "../services/movie";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    [movieService.reducerPath]: movieService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieService.middleware),
});

export default store;
