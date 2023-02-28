import { Link } from "react-router-dom";

import NavigationLoggedIn from "../Navigation/NavigationLoggedIn";

function PopupWithMenu(props) {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClosePopup} />
        <Link
          to="/"
          className="popup__link"
          onClick={props.onClosePopup}
        >
          Главная
        </Link>
        <NavigationLoggedIn onClosePopup={props.onClosePopup} />
      </div>
    </div>
  );
}

export default PopupWithMenu;
