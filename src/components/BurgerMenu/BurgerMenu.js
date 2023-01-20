function BurgerMenu(props) {
  return (
    <>
      <button className="header__burger-menu" type="button" onClick={props.onClick} />
    </>
  );
}

export default BurgerMenu;
