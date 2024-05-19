# ASTON-trainee React - приложения для поиска фильмов
## Использованное API: в приложении используется kinopoiskapiunofficial.tech/api"

## Основной функционал: 
* Регистрация и авторизация пользователя
* Поиск фильма
* Сохранение фильма в избранное
* Сохранение истории поиска
* Получение подробных данных в карточке фильма
<<<<<<< HEAD
* Пользователь может поменять тему
=======
* Пользователь может поменять тему

- [x] Реализованы Требования к функциональности.
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем [LocalStorage](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/services/user.js)

## React
- [x] Функциональные компоненты c хуками в приоритете над классовыми. Классовый [Error Boundary](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/components/ErrorBoundary/ErrorBoundary.jsx)
- [x] Есть разделение на [умные](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/components/SearchForm/SearchForm.jsx) и [глупые](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/components/Footer/Footer.jsx) компоненты 
- [x] Есть [рендеринг списков](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/components/MoviesCardList/MoviesCardList.jsx)
- [x] Реализована хотя бы одна [форма](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/components/SearchForm/SearchForm.jsx) 
- [x] Есть применение [Контекст API](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/components/ThemeContext/ThemeContext.jsx)
- [x] Есть применение [предохранителя](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/main.jsx) 
- [x] Есть хотя бы один [кастомный хук](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/hooks/useDebounce.js)
- [x] Хотя бы несколько компонентов используют [PropTypes](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/components/ErrorBoundary/ErrorBoundary.jsx)
- [x] Поиск не должен триггерить много запросов к серверу [(debounce)](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/components/SearchForm/SearchForm.jsx)
- [x] Есть применение [lazy + Suspense](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/App.jsx)

## Redux
- [x] Используем [Modern Redux with Redux Toolkit](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/store/store.js) 
- [x] Используем [слайсы](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/store/reducers/userReducer.js)
- [x] Есть хотя бы одна [кастомная мидлвара](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/store/store.js)
- [x] Используется [RTK Query](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/services/movie.js)
- [x] Используется [Transforming Responses](https://github.com/MarinaBrodiansky/Aston-trainee-REACT/blob/main/src/services/movie.js)






