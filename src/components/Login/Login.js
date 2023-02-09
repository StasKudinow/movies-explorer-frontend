import { useState } from 'react';
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Auth from "../Auth/Auth";

function Login({ onLogin }) {

  const [isError, setIsError] = useState(false);

  function handleSubmit(values) {
    onLogin(values.email, values.password)
      .catch((err) => {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, '5000');
        console.log(`Ошибка: ${err}`);
      })
  };

  return (
    <main className="auth">
      <Logo />
      <h1 className="auth__title">Рады видеть!</h1>
      <Auth
        onSubmit={handleSubmit}
        isError={isError}
        button="Войти"
      />
      <div className="auth__redirect">
        <p className="auth__redirect-text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="auth__redirect-link"> Регистрация</Link>
      </div>
    </main>
  );
}

export default Login;
