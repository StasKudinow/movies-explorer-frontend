import { Route, Switch } from 'react-router-dom';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <Switch>
      <Route path="/movies">
        <section className="cards">
          {props.movies && props.movies.map((data) => {
            return <MoviesCard
              key={data.id}
              card={data}
            />
          })}
        </section>
      </Route>
      <Route path="/saved-movies">
        <section className="cards cards_saved">
          {props.movies && props.movies.map((data) => {
            return <MoviesCard
              key={data.id}
              card={data}
            />
          })}
        </section>
      </Route>
    </Switch>
  );
}

export default MoviesCardList;
