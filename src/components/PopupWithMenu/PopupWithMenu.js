import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

function PopupWithMenu(props) {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose} />
        <Link to="/" className="popup__link">Главная</Link>
        <Navigation />
      </div>
    </div>
  );
}

export default PopupWithMenu;
