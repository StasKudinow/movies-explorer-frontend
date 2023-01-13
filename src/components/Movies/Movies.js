import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";

function Movies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList />
      <MoviesMore />
    </main>
  );
}

export default Movies;
