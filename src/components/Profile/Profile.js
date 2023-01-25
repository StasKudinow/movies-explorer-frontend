import { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <div className="profile__container">
        <div className="profile__text-container">
          <p className="profile__text">Имя</p>
          <p className="profile__text">Виталий</p>
        </div>
        <div className="profile__text-container">
          <p className="profile__text">E-mail</p>
          <p className="profile__text">pochta@yandex.ru</p>
        </div>
        <button className="profile__edit" type="button">Редактировать</button>
      </div>
      <Link to="/" className="profile__logout" onClick={props.onLogout}>Выйти из аккаунта</Link>
    </main>
  );
}

export default Profile;
