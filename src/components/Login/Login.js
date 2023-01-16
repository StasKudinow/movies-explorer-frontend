import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Auth from "../Auth/Auth";

function Login() {
  return (
    <main className="auth">
      <Logo />
      <h1 className="auth__title">Рады видеть!</h1>
      <Auth />
      <div className="auth__redirect">
        <p className="auth__redirect-text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="auth__redirect-link"> Регистрация</Link>
      </div>
    </main>
  );
}

export default Login;
