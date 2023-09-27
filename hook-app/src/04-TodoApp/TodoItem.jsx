export const TodoItem = ({ id, name, done, onDeleteTask, onTaskDone }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        done ? "task-done" : ""
      }`}
    >
      <span className="align-self-center">{name}</span>
      <div>
        {!done ? <button className="btn btn-success" onClick={() => onTaskDone(id)}>Done</button> : null}
        <button className="btn btn-danger" onClick={() => onDeleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
