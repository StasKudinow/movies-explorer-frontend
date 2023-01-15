import { Route, Switch } from 'react-router-dom';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>

        <Route exact path="/">
          <Main />
          <Footer />
        </Route>

        <Route path="/movies">
          <Movies />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
