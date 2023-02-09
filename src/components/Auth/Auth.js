import { Switch, Route } from "react-router-dom";
import { Formik, Form, Field } from 'formik';

import { validateName, validateEmail, validatePassword } from "../Validate/Validate";

function Auth(props) {

  const tooltipRegister = (
    `auth__tooltip ${props.isError ? 'auth__tooltip_active' : ''}`
  );

  const tooltipLogin = (
    `auth__tooltip auth__tooltip_login ${props.isError ? 'auth__tooltip-login_active' : ''}`
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
        >
          {({ errors, touched, handleChange, values }) => (
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
              <div className={tooltipRegister}>Что-то пошло не так...</div>
              <button className="auth__button" type="submit">{props.button}</button>
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
        >
          {({ errors, touched, handleChange, values }) => (
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
              <div className={tooltipLogin}>Что-то пошло не так...</div>
              <button className="auth__button" type="submit">{props.button}</button>
            </Form>
          )}
        </Formik>
      </Route>
    </Switch>
  );
}

export default Auth;
