import { Route, Switch, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Switch>
      <Route path="/movies">
        <nav>
          <ul className="nav__menu">
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
