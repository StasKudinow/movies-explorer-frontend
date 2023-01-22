import { useState } from "react";

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckbox(evt) {
    setIsChecked(!isChecked);

    if (evt.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const checkboxClassName = (
    `${isChecked ? 'search__checkbox-input-checked' : 'search__checkbox-input-disabled'}`
  )

  return (
    <form>
      <label className="search__checkbox" onClick={handleCheckbox}>
        <input className="search__checkbox-input-hidden" type="checkbox" />
        <div className={checkboxClassName} />
        <p className="search__checkbox-text">Короткометражки</p>
      </label>
    </form>
  );
}

export default FilterCheckbox;
