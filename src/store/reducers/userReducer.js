import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserService } from "../../services/user";

export const createUser = createAsyncThunk(
  "user/createUser",
  UserService.createUser,
);
export const logIn = createAsyncThunk("user/logIn", UserService.logIn);
export const getProfile = createAsyncThunk(
  "user/getProfile",
  UserService.getProfile,
);

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    addFavorites: (state, { payload }) => {
      state.user.favorits = [... state.user.favorits, payload];
    },
    removeFavorite: (state, { payload }) => {
      state.user.favorits = state.user.favorits.filter(({ imdbId }) => imdbId !== payload.imdbId);
    }   
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        window.location.href = "/";
      })
      .addCase(createUser.rejected, (_, { error }) => {
        alert(error.message);
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload;
        window.location.href = "/";
      })
      .addCase(logIn.rejected, (_, { error }) => {
        alert(error.message);
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});

const { actions, reducer } = userSlice;
export const { addFavorites, removeFavorite } = actions;
export default reducer;
