import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Formik, Form, Field } from 'formik';

import { validateName, validateEmail, validatePassword } from "../Validate/Validate";

function Auth(props) {

  const [disabled, setDisabled] = useState(false);

  const buttonClassName = (
    `auth__button ${disabled ? 'auth__button_disabled' : ''}`
  );

  const tooltipClassName = (
    `auth__tooltip ${props.isError ? 'auth__tooltip_active' : ''}`
  );

  return (
    <Switch>
      <Route path="/signup">
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: ''
          }}
          onSubmit={values => {
            props.onSubmit(values);
          }}
          validateOnMount
        >
          {({ errors, touched, handleChange, values, isValid }) => (
            <Form className="auth__form" noValidate>
              <p className="auth__input-text">Имя</p>
              <Field
                className={`auth__input ${errors.name && touched.name && 'auth__input_error-active'}`}
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                validate={validateName}
                required
              />
              {errors.name && touched.name && (
                <span className="auth__input-error">{errors.name}</span>
              )}
              <p className="auth__input-text">E-mail</p>
              <Field
                className={`auth__input ${errors.email && touched.email && 'auth__input_error-active'}`}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                validate={validateEmail}
                required
              />
              {errors.email && touched.email && (
                <span className="auth__input-error">{errors.email}</span>
              )}
              <p className="auth__input-text">Пароль</p>
              <Field
                className={`auth__input ${errors.password && touched.password && 'auth__input_error-active'}`}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                validate={validatePassword}
                required
              />
              {errors.password && touched.password && (
                <span className="auth__input-error">{errors.password}</span>
              )}
              <button className={buttonClassName} type="submit" disabled={
                !isValid ? setDisabled(true) : setDisabled(false)
              }>
                <span className={tooltipClassName}>Что-то пошло не так...</span>
                {props.button}
              </button>
            </Form>
          )}
        </Formik>
      </Route>
      <Route path="/signin">
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={values => {
            props.onSubmit(values);
          }}
          validateOnMount
        >
          {({ errors, touched, handleChange, values, isValid }) => (
            <Form className="auth__form" noValidate>
              <p className="auth__input-text">E-mail</p>
              <Field
                className={`auth__input ${errors.email && touched.email && 'auth__input_error-active'}`}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                validate={validateEmail}
                required
              />
              {errors.email && touched.email && (
                <span className="auth__input-error">{errors.email}</span>
              )}
              <p className="auth__input-text">Пароль</p>
              <Field
                className={`auth__input ${errors.password && touched.password && 'auth__input_error-active'}`}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                validate={validatePassword}
                required
              />
              {errors.password && touched.password && (
                <span className="auth__input-error">{errors.password}</span>
              )}
              <button className={buttonClassName} type="submit" disabled={
                !isValid ? setDisabled(true) : setDisabled(false)
              }>
                <span className={tooltipClassName}>Что-то пошло не так...</span>
                {props.button}
              </button>
            </Form>
          )}
        </Formik>
      </Route>
    </Switch>
  );
}

export default Auth;
