import { useState } from 'react';


import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";

function Movies(props) {

  const [search, setSearch] = useState('');
  const [filtredMovies, setFiltredMovies] = useState([]);

  function handleChangeSearch(evt) {
    setSearch(evt.target.value);
  };

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    const movies = JSON.parse(localStorage.getItem('movies'));
    const filtredMovies = movies.filter(movie => {
      return movie.nameRU.toLowerCase().includes(search.toLowerCase());
    });
    setFiltredMovies(filtredMovies);
    localStorage.setItem('filtredMovies', JSON.stringify(filtredMovies));
  };

  return (
    <main>
      <SearchForm
        onSubmit={handleSearchSubmit}
        onSearchChange={handleChangeSearch}
        search={search}
      />
      <MoviesCardList
        onSaveMovie={props.onSaveMovie}
        movies={filtredMovies}
      />
      <MoviesMore />
    </main>
  );
}

export default Movies;
