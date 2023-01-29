import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";

function Movies(props) {
  return (
    <main>
      <SearchForm />
      <MoviesCardList
        movies={props.movies}
        onSaveMovie={props.onSaveMovie}
      />
      <MoviesMore />
    </main>
  );
}

export default Movies;
