import { Route, Switch } from 'react-router-dom';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  const BASE_MOVIES_URL = 'https://api.nomoreparties.co/';

  return (
    <Switch>
      <Route path="/movies">
        <section className="cards">
          {props.movies.map((movie) => {
            return <MoviesCard
              key={movie.id}
              nameRU={movie.nameRU}
              image={BASE_MOVIES_URL + movie.image.url}
              duration={movie.duration}
              country={movie.country}
              director={movie.director}
              year={movie.year}
              description={movie.description}
              trailerLink={movie.trailerLink}
              thumbnail={BASE_MOVIES_URL + movie.image.formats.thumbnail.url}
              id={movie.id}
              nameEN={movie.nameEN}
              onSaveMovie={props.onSaveMovie}
            />
          })}
        </section>
      </Route>
      <Route path="/saved-movies">
        <section className="cards cards_saved">
          {props.savedMovies.map((movie) => {
            return <MoviesCard
              key={movie.movieId}
              nameRU={movie.nameRU}
              image={movie.image}
              duration={movie.duration}
              country={movie.country}
              director={movie.director}
              year={movie.year}
              description={movie.description}
              trailerLink={movie.trailerLink}
              thumbnail={movie.thumbnail}
              movieId={movie.movieId}
              nameEN={movie.nameEN}
              onSaveMovie={props.onSaveMovie}
            />
          })}
        </section>
      </Route>
    </Switch>
  );
}

export default MoviesCardList;
