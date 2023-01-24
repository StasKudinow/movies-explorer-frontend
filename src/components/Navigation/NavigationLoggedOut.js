import { NavLink } from "react-router-dom";

function NavigationLoggedOut() {
  return (
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
  );
}

export default NavigationLoggedOut;
