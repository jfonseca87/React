import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newValue = inputValue.trim();
    if (newValue.length <= 2) return;

    setCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}