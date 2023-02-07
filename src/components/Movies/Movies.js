import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";

function Movies(props) {

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
        onSaveMovie={props.onSaveMovie}
        onDeleteMovie={props.onDeleteMovie}
        movies={props.movies}
        savedMovies={props.savedMovies}
      />
      <MoviesMore />
    </main>
  );
}

export default Movies;
