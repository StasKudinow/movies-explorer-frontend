import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {

  return (
    <main>
      <SearchForm />
      <MoviesCardList
        movies={props.movies}
        savedMovies={props.savedMovies}
      />
    </main>
  );
}

export default SavedMovies;