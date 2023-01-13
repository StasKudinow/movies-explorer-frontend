import MoviesCard from "../MoviesCard/MoviesCard";
import { movies } from "../../utils/constants";

function MoviesCardList() {
  return (
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
  );
}

export default MoviesCardList;
