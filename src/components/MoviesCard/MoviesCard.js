import { useState } from "react";

import cardImage from "../../images/movie_1.png"

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
  };

  const cardLikeClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
  );

  return (
    <div className="card" onClick={handleLike}>
      <img className="card__image" src={cardImage} alt="Обложка" />
      <div className="card__info">
        <p className="card__title">33 слова о дизайне</p>
        <div className={cardLikeClassName} type="button" />
      </div>
      <p className="card__time">1ч 42м</p>
    </div>
  );
}

export default MoviesCard;
