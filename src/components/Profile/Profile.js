import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import { validateName, validateEmail } from "../Validate/Validate";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {

  const [disabled, setDisabled] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(values) {
    props.onUpdateUserInfo({
      name: values.name,
      email: values.email
    });
  };

  const buttonClassName = (
    `profile__edit ${disabled ? 'profile__edit_disabled' : ''}`
  );

  const tooltipClassName = (
    `profile__tooltip ${props.tooltip ? 'profile__tooltip_active' : ''}`
  );

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <Formik
        initialValues={{
          name: currentUser.name,
          email: currentUser.email
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form className="profile__form" noValidate>
            <label className="profile__form-container">
              <p className="profile__text">Имя</p>
              <div className="profile__input-container">
                <Field
                  className={`profile__input ${errors.name && touched.name && 'profile__input_error-active'}`}
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  validate={validateName}
                  required
                />
                {errors.name && touched.name && (
                  <span className="profile__input-error">{errors.name}</span>
                )}
              </div>
            </label>
            <label className="profile__form-container">
              <p className="profile__text">E-mail</p>
              <div className="profile__input-container">
                <Field
                  className={`profile__input ${errors.email && touched.email && 'profile__input_error-active'}`}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  validate={validateEmail}
                  required
                />
                {errors.email && touched.email && (
                  <span className="profile__input-error">{errors.email}</span>
                )}
              </div>
            </label>
            <div className={tooltipClassName}>Данные были успешно изменены!</div>
            <button className={buttonClassName} type="submit" disabled={
              values.name === currentUser.name &&
              values.email === currentUser.email ?
              setDisabled(true) : setDisabled(false)
            }>
              Редактировать
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/" className="profile__logout" onClick={props.onLogout}>Выйти из аккаунта</Link>
    </main>
  );
}

export default Profile;
