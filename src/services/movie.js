import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
const API_KEY = "0151e40e-32be-43a0-977d-0cb0257f5604";

export const movieService = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getTopMovie: builder.query({
      query: () => {
        const params = {
          type: "TOP_POPULAR_ALL",
          page: 1,
        };
        return `collections?${new URLSearchParams(params)}`;
      },
      transformResponse: (data) => data.items,
    }),
    getMovieById: builder.query({
      query: (id) => `/${id}`
    })
  }),
});

export const { useGetTopMovieQuery, useGetMovieByIdQuery } = movieService;
