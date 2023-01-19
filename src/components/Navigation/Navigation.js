import { Route, Switch, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Navigation() {
  const isMobile = useMediaQuery({ query: '(max-width: 879px)' });

  return (
    <Switch>
      <Route path="/movies">
        <nav>
          <ul className={`nav__menu ${isMobile ? 'nav__menu_mobile' : ''}`}>
            <li>
              <NavLink to="/movies" className="nav__movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="nav__saved-movies">Сохранённые фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/profile"><div className="nav__profile" /></NavLink>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path="/saved-movies">
        <nav>
          <ul className={`nav__menu ${isMobile ? 'nav__menu_mobile' : ''}`}>
            <li>
              <NavLink to="/movies" className="nav__movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="nav__saved-movies">Сохранённые фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/profile"><div className="nav__profile" /></NavLink>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path="/profile">
        <nav>
          <ul className={`nav__menu ${isMobile ? 'nav__menu_mobile' : ''}`}>
            <li>
              <NavLink to="/movies" className="nav__movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="nav__saved-movies">Сохранённые фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/profile"><div className="nav__profile" /></NavLink>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path="/">
        <nav>
          <ul className="nav__menu">
            <li>
              <NavLink to="/signup" className="nav__register">Регистрация</NavLink>
            </li>
            <li>
              <NavLink to="/signin"><button className="nav__login" type="button">Войти</button></NavLink>
            </li>
          </ul>
        </nav>
      </Route>
    </Switch>
  );
}

export default Navigation;
