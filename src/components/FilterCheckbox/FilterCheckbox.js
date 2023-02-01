function FilterCheckbox(props) {

  const checkboxClassName = (
    `${props.isChecked ? 'checkbox__input-checked' : 'checkbox__input-disabled'}`
  )

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
      </label>
    </form>
  );
}

export default FilterCheckbox;
