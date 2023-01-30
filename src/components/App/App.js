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
  // const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupWithMenuOpen, setIsPopupWithMenuOpen] = useState(false);

  const history = useHistory();
  console.log(loggedIn)

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
    MainApi.saveMovie(data)
      .then((movie) => {
        setSavedMovies(movie, ...savedMovies);
      })
      .catch((err) => {
        console.log(`Ошибка сохранения фильма: ${err}`);
      })
  };

  // API
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
    localStorage.removeItem('jwt');
    setLoggedIn(false);
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
    if (loggedIn) {
      Promise.all([MainApi.getUserInfo(), MoviesApi.getInitialMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          // setMovies(moviesData);
          localStorage.setItem('movies', JSON.stringify(moviesData));
          history.push('/movies');
        })
        .catch((err) => {
          console.log(`Ошибка получения данных: ${err}`);
        })
    } else {
      history.push('/');
    }
  }, [history, loggedIn]);

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
              onSaveMovie={handleSaveMovie}
              // movies={movies}
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
