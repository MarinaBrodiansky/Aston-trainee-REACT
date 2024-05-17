import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserService } from "../../services/user";

export const createUser = createAsyncThunk(
  "user/createUser",
  UserService.createUser
);
export const logIn = createAsyncThunk("user/logIn", UserService.logIn);
export const getProfile = createAsyncThunk(
  "user/getProfile",
  UserService.getProfile
);

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    addFavorites: (state, { payload }) => {
      state.user.favorits.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.user.favorits = state.user.favorits.filter(
        ({ kinopoiskId }) => kinopoiskId !== payload.kinopoiskId
      );
    },
    addHistory: (state, { payload }) => {
      state.user.history.push(payload);
    },
    removeHistoryItem: (state, { payload }) => {
      state.user.history = state.user.history.filter((s) => s !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

const { actions, reducer } = userSlice;
export const { addFavorites, removeFavorite, addHistory, removeHistoryItem } =
  actions;
export default reducer;
