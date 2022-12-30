import { useState } from "react";

function NavTab() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  };

  const navTabButton = (
    `navtab__button ${isClicked ? 'navtab__button_animation' : 'navtab__button_hidden'}`
  );

  const navTabFirstButton = (
    `navtab__button ${isClicked ? 'navtab__button_disabled' : ''}`
  );

  return (
    <nav className="navtab__container">
      <button className={navTabFirstButton} type="button" onClick={handleClick}>Узнать больше</button>
      <button className={navTabButton} type="button">О проекте</button>
      <button className={navTabButton} type="button">Технологии</button>
      <button className={navTabButton} type="button">Студент</button>
    </nav>
  )
}

export default NavTab;
