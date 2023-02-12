import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';


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

  const largeSize = useMediaQuery({ query: '(min-width: 1280px)' });
  const mediumSize = useMediaQuery({ query: '(min-width: 768px)' });
  const smallSize = useMediaQuery({ query: '(min-width: 320px)' });

  let item;

  if (largeSize) {
    item = 16;
  } else if (mediumSize) {
    item = 8;
  } else if (smallSize) {
    item = 5;
  }

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState('');
  const [isPopupWithMenuOpen, setIsPopupWithMenuOpen] = useState(false);
  const [next, setNext] = useState(item);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');

  const location = useLocation();

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
        setTooltip(true);
        setTimeout(() => {
          setTooltip(false);
        }, '5000');
      })
      .catch((err) => {
        console.log(`Ошибка обновления данных пользователя: ${err}`);
      })
  };

  function handleSaveMovie(data) {
    return MainApi.saveMovie(data)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
        localStorage.setItem('savedMovies', JSON.stringify([movie, ...savedMovies]));
      })
      .catch((err) => {
        console.log(`Ошибка сохранения фильма: ${err}`);
      })
  };

  function handleDeleteMovie(id) {
    MainApi.deleteMovie(id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== id && item));
      })
      .catch((err) => {
        console.log(`Ошибка удаления фильма: ${err}`);
      })
  };

  function onRegister(name, email, password) {
    return auth.register(name, email, password)
      .then((res) => {
        return res;
      })
  };

  function onLogin(email, password) {
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

  function handleShowMoreClick() {
    setIsClicked(true);

    if (largeSize) {
      setNext(next + 4);
    } else if (mediumSize) {
      setNext(next + 2);
    } else if (smallSize) {
      setNext(next + 2);
    }
  };

  // ChatGPT filter function
  function filterMovies() {
    const movies = JSON.parse(localStorage.getItem('movies'));
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const checkbox = JSON.parse(localStorage.getItem('checkbox'));

    if (largeSize) {
      setNext(16);
    } else if (mediumSize) {
      setNext(8);
    } else if (smallSize) {
      setNext(5);
    }

    if (location.pathname === '/movies') {
      const filteredMovies = movies.filter(movie => {
        if (checkbox) {
          return movie.duration <= 40 && movie.nameRU.toLowerCase().includes(search.toLowerCase());
        } else {
          return movie.nameRU.toLowerCase().includes(search.toLowerCase());
        }
      });

      setMovies(filteredMovies);
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));

      if (JSON.parse(localStorage.getItem('filteredMovies')).length === 0) {
        setTooltip(true);
        setTooltipMessage('Ничего не найдено!');
        setTimeout(() => {
          setTooltip(false);
        }, '5000');
      }

    } else if (location.pathname === '/saved-movies') {
      const filteredSavedMovies = savedMovies.filter(movie => {
        if (checkbox) {
          return movie.duration <= 40 && movie.nameRU.toLowerCase().includes(search.toLowerCase());
        } else {
          return movie.nameRU.toLowerCase().includes(search.toLowerCase());
        }
      });

      setSavedMovies(filteredSavedMovies);
      localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredSavedMovies));

      if (JSON.parse(localStorage.getItem('filteredSavedMovies')).length === 0) {
        setTooltip(true);
        setTooltipMessage('Ничего не найдено!');
        setTimeout(() => {
          setTooltip(false);
        }, '5000');
      }
    }

    localStorage.setItem('search', search);
  };
  // end

  function handleSearchSubmit(evt) {
    evt.preventDefault();

    if (search.length === 0) {
      setTooltip(true);
      setTooltipMessage('Нужно ввести ключевое слово!');
      setTimeout(() => {
        setTooltip(false);
      }, '5000');
    } else {
      setIsLoading(true);
      setTimeout(() => {
        filterMovies();
        setIsLoading(false);
      }, '500');
    }
  };

  function handleCheckboxChange() {
    if (!isChecked) {
      setIsChecked(true);
      localStorage.setItem('checkbox', JSON.stringify(true));
    } else {
      setIsChecked(false);
      localStorage.setItem('checkbox', JSON.stringify(false));
    }

    if (movies.length !== 0) {
      filterMovies();
    } else if (location.pathname === '/saved-movies') {
      filterMovies();
    }
  };

  function handleSearchChange(evt) {
    setSearch(evt.target.value);
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
      if (localStorage.filteredMovies) {
        setMovies(JSON.parse(localStorage.getItem('filteredMovies')));
        setSavedMovies(JSON.parse(localStorage.getItem('filteredSavedMovies')));
        setIsChecked(JSON.parse(localStorage.getItem('checkbox')));
        setSearch(localStorage.getItem('search'));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      Promise.all([MainApi.getUserInfo(), MoviesApi.getInitialMovies(), MainApi.getSavedMovies()])
        .then(([userData, moviesData, savedMoviesData]) => {
          setCurrentUser(userData);

          localStorage.setItem('movies', JSON.stringify(moviesData));

          setSavedMovies(savedMoviesData);
          localStorage.setItem('savedMovies', JSON.stringify(savedMoviesData));
        })
        .catch((err) => {
          console.log(`Ошибка получения данных: ${err}`);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              onSetMovies={setMovies}
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}
              onCheckboxChange={handleCheckboxChange}
              onShowMoreClick={handleShowMoreClick}
              isChecked={isChecked}
              search={search}
              movies={movies}
              savedMovies={savedMovies}
              isClicked={isClicked}
              isLoading={isLoading}
              next={next}
              tooltip={tooltip}
              tooltipMessage={tooltipMessage}
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
              onDeleteMovie={handleDeleteMovie}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}
              onCheckboxChange={handleCheckboxChange}
              isChecked={isChecked}
              search={search}
              movies={movies}
              savedMovies={savedMovies}
              tooltip={tooltip}
              tooltipMessage={tooltipMessage}
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
              tooltip={tooltip}
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

          <Route exact path="/">
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
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
