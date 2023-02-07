import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  // console.log(isLiked)

  const duration = props.duration;
  const minutes = duration % 60;

  function handleLike() {
    if (isLiked === false) {
      setIsLiked(true);
      props.onSaveMovie({
        country: props.country,
        director: props.director,
        duration: duration,
        year: props.year,
        description: props.description,
        image: props.image,
        trailerLink: props.trailerLink,
        thumbnail: props.thumbnail,
        movieId: props.id,
        nameRU: props.nameRU,
        nameEN: props.nameEN,
      });
    } else if (isLiked === true) {
      props.savedMovies.forEach((item) => {
        if (props.id === item.movieId) {
          props.onDeleteMovie(item._id)
        }
      });
      setIsLiked(false);
    }
  };

  function handleDelete() {
    props.onDeleteMovie(props.currentMovie._id);
  };

  useEffect(() => {
    props.movies.forEach(() => {
      // eslint-disable-next-line array-callback-return
      return props.savedMovies.find((i) => {
        if (i.movieId === props.id) {
          setIsLiked(true);
        }
      });
    });
  }, [props.id, props.movies, props.savedMovies]);

  const cardLikeClassName = (
    `cards__button ${isLiked ? 'cards__button_like' : ''}`
  );

  const tooltip = (
    `${isLiked ? 'Сохранено' : 'Сохранить'}`
  );

  return (
    <Switch>
      <Route path="/movies">
        <div className="cards__card" key={props.id}>
          <img className="cards__image" src={props.image} alt={props.nameRU} />
          <div tooltip={tooltip} className="cards__info" onClick={handleLike}>
            <p className="cards__title">{props.nameRU}</p>
            <button className={cardLikeClassName} type="button" />
          </div>
          <p className="cards__time">{duration > 60 ? `1ч ${minutes}м` : `${duration}м`}</p>
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className="cards__card" key={props.movieId}>
          <img className="cards__image" src={props.image} alt={props.nameRU} />
          <div className="cards__info">
            <p className="cards__title">{props.nameRU}</p>
            <button className='cards__button cards__button_delete' type="button" onClick={handleDelete} />
          </div>
          <p className="cards__time">{duration > 60 ? `1ч ${minutes}м` : `${duration}м`}</p>
        </div>
      </Route>
    </Switch>
  );
}

export default MoviesCard;
