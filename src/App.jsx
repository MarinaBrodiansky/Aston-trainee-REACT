import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import ThemeProvider from "./components/ThemeContext/ThemeContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute.jsx";

const HistoryPage = React.lazy(
  () => import("./pages/HistoryPage/HistoryPage.jsx")
);
const SearchPage = React.lazy(
  () => import("./pages/SearchPage/SearchPage.jsx")
);
const MovieDetailsPage = React.lazy(
  () => import("../src/pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const NotFoundPage = React.lazy(
  () => import("../src/pages/NotFoundPage/NotFoundPage")
);
const Login = React.lazy(() => import("../src/pages/LoginPage/LoginPage"));
const Register = React.lazy(
  () => import("../src/pages/RegisterPage/RegisterPage")
);
const FavoriteMoviesPage = React.lazy(
  () => import("../src/pages/FavoriteMoviesPage/FavoriteMoviesPage")
);
const MainPage = React.lazy(() => import("../src/pages/MainPage/MainPage.jsx"));

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Suspense fallback={<h1>Загрузка...</h1>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route
              path="/favorite-movies"
              element={
                <ProtectedRoute>
                  <FavoriteMoviesPage />
                </ProtectedRoute>
              }
            />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <HistoryPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
