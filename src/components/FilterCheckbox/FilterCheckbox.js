function FilterCheckbox(props) {

  const checkboxClassName = (
    `${props.isChecked ? 'checkbox__input-checked' : 'checkbox__input-disabled'}`
  );

  const tooltipClassName = (
    `checkbox__tooltip ${props.tooltip ? 'checkbox__tooltip_active' : ''}`
  );

  return (
    <form>
      <label className="checkbox">
        <input className="checkbox__input-hidden"
          type="checkbox"
          onChange={props.onCheckboxChange}
          checked={props.isChecked}
        />
        <div className={checkboxClassName} />
        <p className="checkbox__text">Короткометражки</p>
        <span className={tooltipClassName}>{props.tooltipMessage}</span>
      </label>
    </form>
  );
}

export default FilterCheckbox;
