import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as auth from '../../utils/auth';

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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupWithMenuOpen, setIsPopupWithMenuOpen] = useState(false);

  const history = useHistory();

  function handlePopupWithMenuClick() {
    setIsPopupWithMenuOpen(true);
  };

  function closeAllPopups() {
    setIsPopupWithMenuOpen(false);
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

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      checkToken(jwt);
    }
  }, []);

  function checkToken(jwt) {
    return auth.getContent(jwt)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(`Ошибка аутентификации: ${err}`);
      })
  };

  return (
    <div className="app">

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
            onLogout={onLogout}
          />
        </Route>

        <Route path="/signup">
          <Register
            onRegister={onRegister}
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

        <Route path="/">
          { loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" /> }
        </Route>

      </Switch>

      <PopupWithMenu
        isOpen={isPopupWithMenuOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
