import { useState } from 'react';
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Auth from "../Auth/Auth";

function Register({ onRegister, onLogin }) {

  const [isError, setIsError] = useState(false);

  function handleSubmit(values) {
    onRegister(values.name, values.email, values.password)
      .then(() => {
        onLogin(values.email, values.password);
        console.log('Success!');
      })
      .catch((err) => {
        if (err) {
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, '5000');
          console.log(`Ошибка: ${err}`);
        }
      })
  };

  return (
    <main className="auth">
      <Logo />
      <h1 className="auth__title">Добро пожаловать!</h1>
      <Auth
        onSubmit={handleSubmit}
        isError={isError}
        button="Зарегистрироваться"
      />
      <div className="auth__redirect">
        <p className="auth__redirect-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="auth__redirect-link"> Войти</Link>
      </div>
    </main>
  );
}

export default Register;
