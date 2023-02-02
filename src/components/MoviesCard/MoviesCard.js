import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  console.log(props.movieId)

  const duration = props.duration;
  const minutes = duration % 60;

  function handleLike() {
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
  };

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
            <button className='cards__button cards__button_delete' type="button" />
          </div>
          <p className="cards__time">{duration > 60 ? `1ч ${minutes}м` : `${duration}м`}</p>
        </div>
      </Route>
    </Switch>
  );
}

export default MoviesCard;
