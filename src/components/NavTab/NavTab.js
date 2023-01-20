import { useState } from "react";

function NavTab() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  };

  const navTabButton = (
    `promo__nav-button ${isClicked ? 'promo__nav-button_animation' : 'promo__nav-button_hidden'}`
  );

  const navTabFirstButton = (
    `promo__nav-button ${isClicked ? 'promo__nav-button_disabled' : ''}`
  );

  return (
    <nav className="promo__nav-container">
      <button className={navTabFirstButton} type="button" onClick={handleClick}>Узнать больше</button>
      <a href="#about-project"><button className={navTabButton} type="button">О проекте</button></a>
      <a href="#techs"><button className={navTabButton} type="button">Технологии</button></a>
      <a href="#student"><button className={navTabButton} type="button">Студент</button></a>
    </nav>
  );
}

export default NavTab;
