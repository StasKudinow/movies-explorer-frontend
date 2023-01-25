// import { useState } from "react";
import { Switch, Route } from "react-router-dom";

function Auth(props) {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isNameError, setIsNameError] = useState(false);
  // const [isEmailError, setIsEmailError] = useState(false);
  // const [isPasswordError, setIsPasswordError] = useState(false);

  // function handleNameChange(e) {
  //   setName(e.target.value);
  //   if (e.target.value.length === 1 || e.target.value.length === 2 || e.target.value.length >= 30) {
  //     setIsNameError(true);
  //   } else {
  //     setIsNameError(false);
  //   }
  // };

  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  //   if (e.target.value.length === 1 || e.target.value.length === 2 || e.target.value.length >= 30) {
  //     setIsEmailError(true);
  //   } else {
  //     setIsEmailError(false);
  //   }
  // };

  // function handlePasswordChange(e) {
  //   setPassword(e.target.value);
  //   if (e.target.value.length === 1 || e.target.value.length === 2 || e.target.value.length >= 30) {
  //     setIsPasswordError(true);
  //   } else {
  //     setIsPasswordError(false);
  //   }
  // };

  return (
    <Switch>
      <Route path="/signup">
        <form className="auth__form" onSubmit={props.onSubmit}>
          <p className="auth__input-text">Имя</p>
          <input
            // className={`auth__input ${isNameError ? 'auth__input_error-active' : ''}`}
            className="auth__input"
            type="text"
            name="name"
            value={props.name}
            onChange={props.onNameChange}
            required
          />
          {/* { isNameError && <span className="auth__input-error">Что-то пошло не так...</span> } */}
          <p className="auth__input-text">E-mail</p>
          <input
            // className={`auth__input ${isEmailError ? 'auth__input_error-active' : ''}`}
            className="auth__input"
            type="email"
            name="email"
            value={props.email}
            onChange={props.onEmailChange}
            required
          />
          {/* { isEmailError && <span className="auth__input-error">Что-то пошло не так...</span> } */}
          <p className="auth__input-text">Пароль</p>
          <input
            // className={`auth__input ${isPasswordError ? 'auth__input_error-active' : ''}`}
            className="auth__input"
            type="password"
            name="password"
            value={props.password}
            onChange={props.onPasswordChange}
            required
          />
          {/* { isPasswordError && <span className="auth__input-error">Что-то пошло не так...</span> } */}
          <button className="auth__button" type="submit">{props.button}</button>
        </form>
      </Route>
      <Route path="/signin">
        <form className="auth__form" onSubmit={props.onSubmit}>
          <p className="auth__input-text">E-mail</p>
          <input
            // className={`auth__input ${isEmailError ? 'auth__input_error-active' : ''}`}
            className="auth__input"
            type="email"
            name="email"
            value={props.email}
            onChange={props.onEmailChange}
            required
          />
          {/* { isEmailError && <span className="auth__input-error">Что-то пошло не так...</span> } */}
          <p className="auth__input-text">Пароль</p>
          <input
            // className={`auth__input ${isPasswordError ? 'auth__input_error-active' : ''}`}
            className="auth__input"
            type="password"
            name="password"
            value={props.password}
            onChange={props.onPasswordChange}
            required
          />
          {/* { isPasswordError && <span className="auth__input-error">Что-то пошло не так...</span> } */}
          <button className="auth__button auth__button_login" type="submit">{props.button}</button>
        </form>
      </Route>
    </Switch>
  );
}

export default Auth;
