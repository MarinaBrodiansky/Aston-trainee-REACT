import { configureStore } from "@reduxjs/toolkit";
import { movieService } from "../services/movie";
import userReducer from "./reducers/userReducer";
import {UserService} from "../services/user.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    [movieService.reducerPath]: movieService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieService.middleware).concat(store => next => action => {
      next(action);
      if (action.type.includes("user/")) {
        const user = store.getState().user.user;
        if(user) {
            UserService.updateUser(user);
        }
      }
    }),
});

export default store;
