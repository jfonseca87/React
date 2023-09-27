export const TodoItem = ({ todo, onDeleteTask, handlerTask }) => {

  const onDeleteItem = () => {
    onDeleteTask(todo.id)
  }

  const onTaskDone = () => {
    handlerTask(todo.id);
  }

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span onClick={onTaskDone} 
            className={`align-self-center ${todo.done ? "text-decoration-line-through": ""} `}
      >
        {todo.description}
      </span>
      <button onClick={onDeleteItem} className="btn btn-danger">Borrar</button>
    </li>
  );
};
