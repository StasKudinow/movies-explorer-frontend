import { Route, Switch } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <Switch>
      <Route path="/movies">
        <header className="header">
          <Logo />
          <Navigation />
        </header>
      </Route>
      <Route path="/saved-movies">
        <header className="header">
          <Logo />
          <Navigation />
        </header>
      </Route>
      <Route path="/profile">
        <header className="header">
          <Logo />
          <Navigation />
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
