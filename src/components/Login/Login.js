import { useState, useCallback } from 'react';
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Auth from "../Auth/Auth";

function Login({ onLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  };

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  };

  const resetForm = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({ email, password })
      .then(resetForm)
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  };

  return (
    <main className="auth">
      <Logo />
      <h1 className="auth__title">Рады видеть!</h1>
      <Auth
        onSubmit={handleSubmit}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        email={email}
        password={password}
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
