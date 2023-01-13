import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__icon" />
        <input className="search__input" type="text" placeholder="Фильм" />
        <button className="search__button" type="submit" />
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;