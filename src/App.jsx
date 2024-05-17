import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../src/pages/MainPage/MainPage';
import FavoriteMoviesPage from '../src/pages/FavoriteMoviesPage/FavoriteMoviesPage';
import Register from '../src/pages/RegisterPage/RegisterPage';
import Login from '../src/pages/LoginPage/LoginPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';
import AuthProvider from './components/AuthProvider/AuthProvider';
import MovieDetailsPage from "../src/pages/MovieDetailsPage/MovieDetailsPage.jsx";
import SearchPage from './pages/SearchPage/SearchPage.jsx';
import HistoryPage from './pages/HistoryPage/HistoryPage.jsx';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/favorite-movies' element={<FavoriteMoviesPage />} />
        <Route path='/movie/:id' element={<MovieDetailsPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/history' element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  </AuthProvider>
  )
}

export default App