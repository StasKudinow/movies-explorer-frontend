import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <main>
      <SearchForm />
      <MoviesCardList
        savedMovies={props.savedMovies}
      />
    </main>
  );
}

export default SavedMovies;