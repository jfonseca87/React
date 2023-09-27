import { useState } from "react";

export const TodoAdd = ({ onNewTaskAdded }) => {
  const [inputValue, setInput] = useState("");

  const onInputChange = ({target}) => {
    const newValue = target.value.trim();
    setInput(newValue);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length === 0) return;
    
    onNewTaskAdded({
        id: new Date().getTime(),
        description: inputValue,
        done: false
    });

    setInput("");
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add new task"
          className="form-control"
          value={inputValue}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-1">
          Add
        </button>
      </form>
    </>
  );
};
