const BASE_URL = "https://kinopoiskapiunofficial.tech/api";
const API_KEY = "0151e40e-32be-43a0-977d-0cb0257f5604";

const fetchData = async (url, params = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    method: "GET",
    params,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const getTopMovies = async () => {
  const params = {
    type: "TOP_POPULAR_ALL",
    page: 1,
  };
  const url = `/v2.2/films/collections?${new URLSearchParams(params)}`;
  const data = await fetchData(url);
  return transformTopMovies(data);
};

export const searchMoviesByKeyword = async (query, page) => {
  const url = `/v2.1/films/search-by-keyword?keyword=${query}&page=${page}`;
  const data = await fetchData(url);
  return transformSearch(data);
};

export const getMovieById = async (id) => {
  const url = `/v2.2/films/${id}`;
  const data = await fetchData(url);
  return transformMovieById(data);
};

