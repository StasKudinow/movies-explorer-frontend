import { Route, Switch, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Navigation() {
  const isMobile = useMediaQuery({ query: '(max-width: 879px)' });

  return (
    <Switch>
      <Route path="/movies">
        <nav>
          <ul className={`header__nav-menu ${isMobile ? 'header__nav-menu_mobile' : ''}`}>
            <li>
              <NavLink to="/movies" className="header__nav-movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="header__nav-saved-movies">Сохранённые фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <button className="header__nav-profile" type="button">
                  <div className="header__nav-profile-container">
                    <p className="header__nav-profile-text">Аккаунт</p>
                    <div className="header__nav-profile-image" />
                  </div>
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path="/saved-movies">
        <nav>
          <ul className={`header__nav-menu ${isMobile ? 'header__nav-menu_mobile' : ''}`}>
            <li>
              <NavLink to="/movies" className="header__nav-movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="header__nav-saved-movies">Сохранённые фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <button className="header__nav-profile" type="button">
                  <div className="header__nav-profile-container">
                    <p className="header__nav-profile-text">Аккаунт</p>
                    <div className="header__nav-profile-image" />
                  </div>
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path="/profile">
        <nav>
          <ul className={`header__nav-menu ${isMobile ? 'header__nav-menu_mobile' : ''}`}>
            <li>
              <NavLink to="/movies" className="header__nav-movies">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="header__nav-saved-movies">Сохранённые фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <button className="header__nav-profile" type="button">
                  <div className="header__nav-profile-container">
                    <p className="header__nav-profile-text">Аккаунт</p>
                    <div className="header__nav-profile-image" />
                  </div>
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path="/">
        <nav>
          <ul className="header__nav-menu">
            <li>
              <NavLink to="/signup" className="header__nav-register">Регистрация</NavLink>
            </li>
            <li>
              <NavLink to="/signin"><button className="header__nav-login" type="button">Войти</button></NavLink>
            </li>
          </ul>
        </nav>
      </Route>
    </Switch>
  );
}

export default Navigation;
