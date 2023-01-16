import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Auth from "../Auth/Auth";

function Register() {
  return (
    <main className="auth">
      <Logo />
      <h1 className="auth__title">Добро пожаловать!</h1>
      <Auth />
      <div className="auth__redirect">
        <p className="auth__redirect-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="auth__redirect-link"> Войти</Link>
      </div>
    </main>
  );
}

export default Register;
