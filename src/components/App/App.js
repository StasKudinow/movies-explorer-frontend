import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as auth from '../../utils/auth';
import * as MainApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi'

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupWithMenu from '../PopupWithMenu/PopupWithMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState('');
  const [isPopupWithMenuOpen, setIsPopupWithMenuOpen] = useState(false);

  const history = useHistory();

  function handlePopupWithMenuClick() {
    setIsPopupWithMenuOpen(true);
  };

  function closeAllPopups() {
    setIsPopupWithMenuOpen(false);
  };

  function handleUpdateUserInfo(data) {
    MainApi.updateUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка обновления данных пользователя: ${err}`);
      })
  };

  function handleSaveMovie(data) {
    return MainApi.saveMovie(data)
      .then((movie) => {
        setSavedMovies(...savedMovies, movie);
      })
      .catch((err) => {
        console.log(`Ошибка сохранения фильма: ${err}`);
      })
  };

  function onRegister({ name, email, password }) {
    return auth.register(name, email, password)
      .then((res) => {
        return res;
      })
  };

  function onLogin({ email, password }) {
    return auth.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
        }
      })
  };

  function onLogout() {
    localStorage.clear();
    setLoggedIn(false);
    setMovies([]);
    setIsChecked(false);
    setSearch('');
  };

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  };

  function handleSearchChange(evt) {
    setSearch(evt.target.value);
  };

  function handleSearchSubmit(evt) {
    evt.preventDefault();

    const movies = JSON.parse(localStorage.getItem('movies'));
    const filteredMovies = movies.filter(movie => {
      if (isChecked) {
        return movie.duration <= 40 && movie.nameRU.toLowerCase().includes(search.toLowerCase());
      } else {
        return movie.nameRU.toLowerCase().includes(search.toLowerCase());
      }
    });
    setMovies(filteredMovies);

    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    localStorage.setItem('checkbox', JSON.stringify(isChecked));
    localStorage.setItem('search', search);
  };

  function checkToken(jwt) {
    return auth.getContent(jwt)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(`Ошибка аутентификации: ${err}`);
      })
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      checkToken(jwt);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(loggedIn) {
      if (localStorage.filteredMovies) {
        setMovies(JSON.parse(localStorage.getItem('filteredMovies')));
        setIsChecked(JSON.parse(localStorage.getItem('checkbox')));
        setSearch(localStorage.getItem('search'));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([MainApi.getUserInfo(), MoviesApi.getInitialMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          localStorage.setItem('movies', JSON.stringify(moviesData));
          history.push('/movies');
        })
        .catch((err) => {
          console.log(`Ошибка получения данных: ${err}`);
        })
    } else {
      history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      MainApi.getSavedMovies()
        .then((savedMoviesData) => {
          setSavedMovies(savedMoviesData);
        })
        .catch((err) => {
          console.log(`Ошибка получения сохраненных фильмов: ${err}`);
        })
    }
  }, [loggedIn]);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>

        <Switch>

          <Route exact path="/">
            <Header
              onPopupWithMenu={handlePopupWithMenuClick}
              loggedIn={loggedIn}
            />
            <Main />
            <Footer />
          </Route>

          <Route path="/movies" >
            <Header
              onPopupWithMenu={handlePopupWithMenuClick}
              loggedIn={loggedIn}
            />
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}
              onCheckboxChange={handleCheckboxChange}
              onSaveMovie={handleSaveMovie}
              isChecked={isChecked}
              movies={movies}
              search={search}
              savedMovies={savedMovies}
            />
            <Footer />
          </Route>

          <Route path="/saved-movies" >
            <Header
              onPopupWithMenu={handlePopupWithMenuClick}
              loggedIn={loggedIn}
            />
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              movies={movies}
              savedMovies={savedMovies}
            />
            <Footer />
          </Route>

          <Route path="/profile" >
            <Header
              onPopupWithMenu={handlePopupWithMenuClick}
              loggedIn={loggedIn}
            />
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              onUpdateUserInfo={handleUpdateUserInfo}
              onLogout={onLogout}
            />
          </Route>

          <Route path="/signup">
            <Register
              onRegister={onRegister}
              onLogin={onLogin}
            />
          </Route>

          <Route path="/signin">
            <Login
              onLogin={onLogin}
            />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>

        </Switch>

        <PopupWithMenu
          isOpen={isPopupWithMenuOpen}
          onClose={closeAllPopups}
        />

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
