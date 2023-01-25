import { useState, useCallback } from 'react';
import { Link, useHistory } from "react-router-dom";

import Logo from "../Logo/Logo";
import Auth from "../Auth/Auth";

function Register({ onRegister }) {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  };

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  };

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  };

  const resetForm = useCallback(() => {
    setName('');
    setEmail('');
    setPassword('');
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({ name, email, password })
      .then(resetForm)
      .then(() => {
        history.push('/movies');
        console.log('Success!');
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  };

  return (
    <main className="auth">
      <Logo />
      <h1 className="auth__title">Добро пожаловать!</h1>
      <Auth
        onSubmit={handleSubmit}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        name={name}
        email={email}
        password={password}
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
