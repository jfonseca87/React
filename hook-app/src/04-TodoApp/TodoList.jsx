import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteTask, onTaskDone }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.description}
          done={todo.done}
          onDeleteTask={onDeleteTask}
          onTaskDone={onTaskDone}
        />
      ))}
    </ul>
  );
};
