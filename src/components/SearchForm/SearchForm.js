import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {

  const tooltipClassName = (
    `search__tooltip ${props.tooltip ? 'search__tooltip_active' : ''}`
  );

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
        <div className={tooltipClassName}>{props.tooltipMessage}</div>
      </form>
      <FilterCheckbox
        onCheckboxChange={props.onCheckboxChange}
        isChecked={props.isChecked}
      />
    </section>
  );
}

export default SearchForm;
