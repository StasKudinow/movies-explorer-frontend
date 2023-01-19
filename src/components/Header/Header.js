import { Route, Switch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Logo from '../Logo/Logo';
import Navigation from "../Navigation/Navigation";
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 879px)' });

  return (
    <Switch>
      <Route path="/movies">
        <header className="header">
          <Logo />
          { isMobile ? <BurgerMenu onClick={props.onPopupWithMenu} /> : <Navigation /> }
        </header>
      </Route>
      <Route path="/saved-movies">
        <header className="header">
          <Logo />
          { isMobile ? <BurgerMenu onClick={props.onPopupWithMenu} /> : <Navigation /> }
        </header>
      </Route>
      <Route path="/profile">
        <header className="header">
          <Logo />
          { isMobile ? <BurgerMenu onClick={props.onPopupWithMenu} /> : <Navigation /> }
        </header>
      </Route>
      <Route path="/">
        <header className="header header_main-page">
          <Logo />
          <Navigation />
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
