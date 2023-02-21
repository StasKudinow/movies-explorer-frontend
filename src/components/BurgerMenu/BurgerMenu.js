import { Route, Switch } from "react-router-dom";

function BurgerMenu(props) {
  return (
    <Switch>
      <Route path="/movies">
        <button className="burger-menu" type="button" onClick={props.onClick} />
      </Route>
      <Route path="/saved-movies">
        <button className="burger-menu" type="button" onClick={props.onClick} />
      </Route>
      <Route path="/profile">
        <button className="burger-menu" type="button" onClick={props.onClick} />
      </Route>
      <Route path="/">
        <button className="burger-menu burger-menu_main-page" type="button" onClick={props.onClick} />
      </Route>
    </Switch>
  );
}

export default BurgerMenu;
