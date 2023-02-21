import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [isError, setIsError] = useState(false);

  const duration = props.duration;
  const hours = Math.floor(duration / 60);
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
      })
      .catch((err) => {
        if (err === 401) {
          props.onLogout();
        }
        setIsLiked(false);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, '5000');
        console.log(`Ошибка сохранения фильма: ${err}`);
      })
    } else if (isLiked === true) {
      props.savedMovies.forEach((item) => {
        if (props.id === item.movieId) {
          props.onDeleteMovie(item);
        }
      });
      setIsLiked(false);
    }
  };

  function handleDelete() {
    props.onDeleteMovie(props.currentMovie);
  };

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    props.movies.forEach(() => {
      // eslint-disable-next-line array-callback-return
      return savedMovies.find((i) => {
        if (props.id === i.movieId) {
          setIsLiked(true);
        }
      });
    });
  }, [props.id, props.movies]);

  const cardLikeClassName = (
    `cards__button ${isLiked ? 'cards__button_like' : ''}`
  );

  const tooltip = (
    `${isLiked ? 'Сохранено' : 'Сохранить'}`
  );

  const errorTooltip = (
    `cards__tooltip-error ${isError ? 'cards__tooltip-error_active' : ''}`
  );

  const cardClassName = (
    `cards__card ${props.isClicked ? 'cards__card_visible' : ''}`
  );

  return (
    <Switch>
      <Route path="/movies">
        <div className={cardClassName} key={props.id}>
          <a className="cards__trailer-link" href={props.trailerLink} target="_blank" rel="noreferrer">
            <img className="cards__image" src={props.image} alt={props.nameRU} />
          </a>
          <span className={errorTooltip}>Не удалось сохранить</span>
          <div tooltip={tooltip} error-tooltip={tooltip} className="cards__info" onClick={handleLike}>
            <p className="cards__title">{props.nameRU}</p>
            <button className={cardLikeClassName} type="button" />
          </div>
          <p className="cards__time">{duration > 60 ? `${hours}ч ${minutes}м` : `${duration}м`}</p>
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className="cards__card" key={props.movieId}>
          <a className="cards__trailer-link" href={props.trailerLink} target="_blank" rel="noreferrer">
            <img className="cards__image" src={props.image} alt={props.nameRU} />
          </a>
          <div className="cards__info">
            <p className="cards__title">{props.nameRU}</p>
            <button className='cards__button cards__button_delete' type="button" onClick={handleDelete} />
          </div>
          <p className="cards__time">{duration > 60 ? `${hours}ч ${minutes}м` : `${duration}м`}</p>
        </div>
      </Route>
    </Switch>
  );
}

export default MoviesCard;
