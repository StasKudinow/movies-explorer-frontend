import { useState } from "react";
import { Route, Switch } from 'react-router-dom';

function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  };

  const cardLikeClassName = (
    `cards__button ${isLiked ? 'cards__button_like' : ''}`
  );

  return (
    <Switch>
      <Route path="/movies">
        <div className="cards__card" onClick={handleLike}>
          <img className="cards__image" src={props.image} alt="Обложка" />
          <div className="cards__info">
            <p className="cards__title">{props.title}</p>
            <button className={cardLikeClassName} type="button" />
          </div>
          <p className="cards__time">{props.duration}</p>
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className="cards__card">
          <img className="cards__image" src={props.image} alt="Обложка" />
          <div className="cards__info">
            <p className="cards__title">{props.title}</p>
            <button className='cards__button cards__button_delete' type="button" />
          </div>
          <p className="cards__time">{props.duration}</p>
        </div>
      </Route>
    </Switch>
    
  );
}

export default MoviesCard;
