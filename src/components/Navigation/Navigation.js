function Navigation() {
  return (
    <nav>
      <ul className="nav__menu">
        <li>
          <a className="nav__register" href="/">Регистрация</a>
        </li>
        <li>
          <button className="nav__login" type="button">Войти</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
