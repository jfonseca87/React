import { useState } from "react";

export const TodoForm = ({ onAddNewTask }) => {
  const [description, setDescription] = useState("");

  const inInputChange = ({ target }) => {
    const description = target.value.trim();
    setDescription(description);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (description.length === 0) return;

    onAddNewTask({
        id: 0,
        description,
        done: false
    });

    setDescription("");
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={onSubmit} >
        <input
          type="text"
          placeholder="Add new task"
          className="form-control"
          value={description}
          onChange={inInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Add
        </button>
      </form>
    </>
  );
};
