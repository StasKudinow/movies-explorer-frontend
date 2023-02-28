import { Route, Switch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Logo from '../Logo/Logo';
import NavigationLoggedIn from '../Navigation/NavigationLoggedIn';
import NavigationLoggedOut from '../Navigation/NavigationLoggedOut';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 879px)' });

  const isLoggedIn = props.loggedIn;

  let navigation;

  if (isLoggedIn) {
    navigation = isMobile ?
      <BurgerMenu onClick={props.onPopupWithMenu} /> : <NavigationLoggedIn />
  } else {
    navigation = <NavigationLoggedOut />
  };

  return (
    <Switch>
      <Route path="/movies">
        <header className="header">
          <Logo />
          {navigation}
        </header>
      </Route>
      <Route path="/saved-movies">
        <header className="header">
          <Logo />
          {navigation}
        </header>
      </Route>
      <Route path="/profile">
        <header className="header">
          <Logo />
          {navigation}
        </header>
      </Route>
      <Route path="/">
        <header className="header header_main-page">
          <Logo />
          {navigation}
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
