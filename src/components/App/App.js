import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';

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

  function handlePopupWithMenuClick() {
    setIsPopupWithMenuOpen(true);
  };

  function closeAllPopups() {
    setIsPopupWithMenuOpen(false);
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
          />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>

        <Route exact path="/">
          { loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" /> }
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
