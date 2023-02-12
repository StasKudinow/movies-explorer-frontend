import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {

  return (
    <section className="search">
      <form className="search__form" onSubmit={props.onSearchSubmit} noValidate>
        <div className="search__icon" />
        <input
          className="search__input"
          type="text"
          name="value"
          value={props.search}
          onChange={props.onSearchChange}
          placeholder="Фильм"
          required
        />
        <button className="search__button" type="submit" />
      </form>
      <FilterCheckbox
        onCheckboxChange={props.onCheckboxChange}
        isChecked={props.isChecked}
        tooltip={props.tooltip}
        tooltipMessage={props.tooltipMessage}
      />
    </section>
  );
}

export default SearchForm;
