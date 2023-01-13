import { useState } from "react";
import { Route, Switch } from 'react-router-dom';

function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  };

  const cardLikeClassName = (
    `card__button ${isLiked ? 'card__button_like' : ''}`
  );

  return (
    <Switch>
      <Route path="/movies">
        <div className="card" onClick={handleLike}>
          <img className="card__image" src={props.image} alt="Обложка" />
          <div className="card__info">
            <p className="card__title">{props.title}</p>
            <div className={cardLikeClassName} />
          </div>
          <p className="card__time">{props.duration}</p>
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className="card card_saved-movies">
          <img className="card__image" src={props.image} alt="Обложка" />
          <div className="card__info">
            <p className="card__title">{props.title}</p>
            <div className='card__button card__button_delete' />
          </div>
          <p className="card__time">{props.duration}</p>
        </div>
      </Route>
    </Switch>
    
  );
}

export default MoviesCard;
