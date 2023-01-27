import { useState } from "react";
import { Route, Switch } from 'react-router-dom';

function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  const image = 'https://api.nomoreparties.co' + props.card.image.url;
  const duration = props.card.duration;
  const minutes = duration - 60;

  function handleLike() {
    setIsLiked(!isLiked);
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
        <div className="cards__card" key={props.card.id}>
          <img className="cards__image" src={image} alt={props.card.nameRU} />
          <div tooltip={tooltip} className="cards__info" onClick={handleLike}>
            <p className="cards__title">{props.card.nameRU}</p>
            <button className={cardLikeClassName} type="button" />
          </div>
          <p className="cards__time">{duration > 60 ? `1ч ${minutes}м` : `${duration}м`}</p>
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className="cards__card" key={props.card.id}>
          <img className="cards__image" src={image} alt={props.card.nameRU} />
          <div className="cards__info">
            <p className="cards__title">{props.card.nameRU}</p>
            <button className='cards__button cards__button_delete' type="button" />
          </div>
          <p className="cards__time">{duration > 60 ? `1ч ${minutes}м` : `${duration}м`}</p>
        </div>
      </Route>
    </Switch>
  );
}

export default MoviesCard;
