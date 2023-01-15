import { Route, Switch } from 'react-router-dom';

import MoviesCard from "../MoviesCard/MoviesCard";
import { movies, savedMovies } from "../../utils/constants";

function MoviesCardList() {
  return (
    <Switch>
      <Route path="/movies">
        <section className="card-list">
          {movies.map((card) => {
            return <MoviesCard
              key={card.id}
              image={card.image}
              title={card.title}
              duration={card.duration}
            />
          })}
        </section>
      </Route>
      <Route path="/saved-movies">
        <section className="card-list card-list_saved">
          {savedMovies.map((card) => {
            return <MoviesCard
              key={card.id}
              image={card.image}
              title={card.title}
              duration={card.duration}
            />
          })}
        </section>
      </Route>
    </Switch>
  );
}

export default MoviesCardList;
