import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoInfo } from "./TodoInfo";
import { TodoList } from "./TodoList";
import { getTodos } from "../services/todoService";

export const TodoAppWithoutReducer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const tasks = getTodos();
    setTodos(tasks);
  }, []);

  const onDeleteTask = (id) => {
    const filteredTodos = todos.filter((x) => x.id !== id);
    setTodos(filteredTodos);
  };

  const onAddNewTask = (task) => {
    task.id = todos.length + 1;

    setTodos([...todos, task]);
  };

  const onTaskDone = (id) => {
    const task = todos.find((x) => x.id === id);
    task.done = true;

    setTodos([...todos]);
  };

  return (
    <>
      <TodoInfo todos={todos} />
      <hr />
      <div className="row">
        <div className="col-7">
          {todos.length ? (
            <TodoList
              todos={todos}
              onDeleteTask={onDeleteTask}
              onTaskDone={onTaskDone}
            />
          ) : (
            <h2> Add a new task... </h2>
          )}
        </div>
        <div className="col-5">
          <TodoForm onAddNewTask={onAddNewTask} />
        </div>
      </div>
    </>
  );
};
