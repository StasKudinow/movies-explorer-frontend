import { Route, Switch, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Navigation() {
  const isMobile = useMediaQuery({ query: '(max-width: 879px)' });

  return (
    <Switch>
      <Route path="/movies">
        <nav>
          <ul className={`nav-menu ${isMobile ? 'nav-menu_mobile' : ''}`}>
            <li>
              <NavLink to="/movies" className="nav-menu__movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="nav-menu__saved-movies">Сохранённые фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <button className="nav-menu__profile" type="button">
                  <div className="nav-menu__profile-container">
                    <p className="nav-menu__profile-text">Аккаунт</p>
                    <div className="nav-menu__profile-image" />
                  </div>
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path="/saved-movies">
        <nav>
          <ul className={`nav-menu ${isMobile ? 'nav-menu_mobile' : ''}`}>
            <li>
              <NavLink to="/movies" className="nav-menu__movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="nav-menu__saved-movies">Сохранённые фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <button className="nav-menu__profile" type="button">
                  <div className="nav-menu__profile-container">
                    <p className="nav-menu__profile-text">Аккаунт</p>
                    <div className="nav-menu__profile-image" />
                  </div>
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path="/profile">
        <nav>
          <ul className={`nav-menu ${isMobile ? 'nav-menu_mobile' : ''}`}>
            <li>
              <NavLink to="/movies" className="nav-menu__movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="nav-menu__saved-movies">Сохранённые фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <button className="nav-menu__profile" type="button">
                  <div className="nav-menu__profile-container">
                    <p className="nav-menu__profile-text">Аккаунт</p>
                    <div className="nav-menu__profile-image" />
                  </div>
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path="/">
        <nav>
          <ul className="nav-menu">
            <li>
              <NavLink to="/signup" className="nav-menu__register">Регистрация</NavLink>
            </li>
            <li>
              <NavLink to="/signin"><button className="nav-menu__login" type="button">Войти</button></NavLink>
            </li>
          </ul>
        </nav>
      </Route>
    </Switch>
  );
}

export default Navigation;
