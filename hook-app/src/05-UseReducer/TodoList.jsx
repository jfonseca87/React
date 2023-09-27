import { TodoItem } from "../05-UseReducer";

export const TodoList = ({ todos = [], onDeleteTask, handlerTask }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTask={onDeleteTask}
          handlerTask={handlerTask}
        />
      ))}
    </ul>
  );
};
