import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import Logo from "../Logo/Logo";
import Auth from "../Auth/Auth";

function Login({ onLogin }) {

  const [isError, setIsError] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  console.log(inputDisabled)

  const history = useHistory();

  function handleSubmit(values) {
    setInputDisabled(true);
    onLogin(values.email, values.password)
      .then(() => {
        history.push('/movies');
      })
      .catch((err) => {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, '5000');
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        setInputDisabled(false);
      })
  };

  return (
    <main className="auth">
      <Logo />
      <h1 className="auth__title">Рады видеть!</h1>
      <Auth
        onSubmit={handleSubmit}
        isError={isError}
        inputDisabled={inputDisabled}
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
