import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const currentUser = useContext(CurrentUserContext);

  function handleNameChange(evt) {
    setName(evt.target.value);
  };

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUserInfo({
      name: name,
      email: email
    });
  };

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__form-container">
          <p className="profile__text">Имя</p>
          <input
            className="profile__input"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="profile__form-container">
          <p className="profile__text">E-mail</p>
          <input
            className="profile__input"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <button className="profile__edit" type="submit">Редактировать</button>
      </form>
      <Link to="/" className="profile__logout" onClick={props.onLogout}>Выйти из аккаунта</Link>
    </main>
  );
}

export default Profile;
