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
    `${isChecked ? 'checkbox__input-checked' : 'checkbox__input-disabled'}`
  )

  return (
    <form>
      <label className="checkbox" onClick={handleCheckbox}>
        <input className="checkbox__input-hidden" type="checkbox" />
        <div className={checkboxClassName} />
        <p className="checkbox__text">Короткометражки</p>
      </label>
    </form>
  );
}

export default FilterCheckbox;
