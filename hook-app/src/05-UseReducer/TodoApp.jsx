import { useEffect, useReducer } from "react";
import { TodoAdd, TodoInfo, TodoList } from "../05-UseReducer/";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return  JSON.parse(localStorage.getItem("todos")) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const onNewTaskAdded = (task) => {
      dispatch({
        type: "Add",
        payload: task
      });
    }

    const onDeleteTask = (id) => {
      dispatch({
        type: "Remove",
        payload: id
      });
    }

    const handlerTask = (id) => {
      dispatch({
        type: "ToggleDone",
        payload: id
      })
    }

    return (
      <>
        <TodoInfo todos={todos} />
        <hr />
        <div className="row">
          <div className="col-7">
            {
              todos.length
              ? < TodoList todos={todos} onDeleteTask={onDeleteTask} handlerTask={handlerTask} />
              : <h2>Add a new task...</h2>
            }
          </div>
          <div className="col-5">
            <TodoAdd onNewTaskAdded={onNewTaskAdded}/>
          </div>
        </div>
      </>
    );
  };
  