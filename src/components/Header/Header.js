import { Route, Switch, Link } from 'react-router-dom';

import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <Switch>
      <Route path="/movies">
        <header className="header">
        <Link to="/"><button className="header__logo" type="button" /></Link>
          <Navigation />
        </header>
      </Route>
      <Route path="/">
        <header className="header header_main-page">
          <Link to="/"><button className="header__logo" type="button" /></Link>
          <Navigation />
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
