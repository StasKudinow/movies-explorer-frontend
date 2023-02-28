import { NavLink, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function NavigationLoggedIn(props) {

  const isMobile = useMediaQuery({ query: '(max-width: 879px)' });

  return (
    <Switch>
      <Route path="/movies">
        <nav>
          <ul className={`nav-menu ${isMobile ? 'nav-menu_mobile' : ''}`}>
            <li>
              <NavLink
                to="/movies"
                className="nav-menu__movies"
                activeClassName="nav-menu__movies_active"
                onClick={props.onClosePopup}
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className="nav-menu__movies"
                onClick={props.onClosePopup}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={props.onClosePopup}>
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
              <NavLink
                to="/movies"
                className="nav-menu__movies"
                onClick={props.onClosePopup}
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className="nav-menu__movies"
                activeClassName="nav-menu__movies_active"
                onClick={props.onClosePopup}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={props.onClosePopup}>
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
              <NavLink
                to="/movies"
                className="nav-menu__movies"
                onClick={props.onClosePopup}
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className="nav-menu__movies"
                onClick={props.onClosePopup}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={props.onClosePopup}>
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
          <ul className={`nav-menu ${isMobile ? 'nav-menu_mobile' : ''}`}>
            <li>
              <NavLink
                to="/movies"
                className="nav-menu__movies"
                onClick={props.onClosePopup}
              >
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className="nav-menu__movies"
                onClick={props.onClosePopup}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={props.onClosePopup}>
                <button className={`nav-menu__profile ${isMobile? '' : 'nav-menu__profile_main-page'}`} type="button">
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
    </Switch>
  );
}

export default NavigationLoggedIn;
