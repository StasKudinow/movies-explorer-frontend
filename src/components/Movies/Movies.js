import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";
import Preloader from "../Preloader/Preloader";

function Movies(props) {

  console.log(props.next)

  let length;
  let preloader;

  if (props.movies.length > props.next) {
    length = <MoviesMore onShowMoreClick={props.onShowMoreClick} />
  } else if (props.movies.length <= props.next) {
    length = '';
  }

  if (props.isLoading) {
    preloader = <Preloader />
  } else {
    preloader = '';
  }

  return (
    <main>
      <SearchForm
        onSearchSubmit={props.onSearchSubmit}
        onSearchChange={props.onSearchChange}
        onCheckboxChange={props.onCheckboxChange}
        isChecked={props.isChecked}
        search={props.search}
      />
      {preloader}
      <MoviesCardList
        onSaveMovie={props.onSaveMovie}
        onDeleteMovie={props.onDeleteMovie}
        movies={props.movies}
        savedMovies={props.savedMovies}
        isClicked={props.isClicked}
        next={props.next}
      />
      {length}
    </main>
  );
}

export default Movies;
