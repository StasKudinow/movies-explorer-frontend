import { Route, Switch } from 'react-router-dom';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
