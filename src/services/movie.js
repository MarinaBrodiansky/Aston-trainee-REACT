import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films";
export const API_KEY = "0151e40e-32be-43a0-977d-0cb0257f5604";

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
    getMovie: builder.query({
      query: (search) => {
        const params = {
          page: 1,
        };

        if(search) params.keyword = search;
        else params.type = "TOP_POPULAR_ALL";



        return `${search ? '' : '/collections'}?${new URLSearchParams(params)}`;
      },
      transformResponse: (data) => data.items,
    }),
    getMovieById: builder.query({
      query: (id) => `/${id}`
    }),
    getMovieBySearch: builder.query({
      query: (search) => new URLSearchParams({
        keyword: search
      })
    })
  }),
});

export const { useGetMovieQuery, useGetMovieByIdQuery } = movieService;
