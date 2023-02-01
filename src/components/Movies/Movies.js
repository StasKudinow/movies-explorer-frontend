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
        movies={props.movies}
        isChecked={props.isChecked}
      />
      <MoviesMore />
    </main>
  );
}

export default Movies;
