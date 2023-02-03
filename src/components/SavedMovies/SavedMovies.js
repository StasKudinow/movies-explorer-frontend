import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {

  return (
    <main>
      <SearchForm
        onSearchSubmit={props.onSearchSubmit}
        onSearchChange={props.onSearchChange}
        onCheckboxChange={props.onCheckboxChange}
        isChecked={props.isChecked}
        search={props.search}
      />
      <MoviesCardList
        onDeleteMovie={props.onDeleteMovie}
        movies={props.movies}
        savedMovies={props.savedMovies}
      />
    </main>
  );
}

export default SavedMovies;