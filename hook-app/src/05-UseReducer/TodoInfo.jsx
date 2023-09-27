import { useEffect, useState } from "react";

export const TodoInfo = ({todos = []}) => {
  const [counters, setCounters] = useState({
    tasks: 0,
    pending: 0
  })

  useEffect(() => {
    setCounters({
      tasks: todos.length,
      pending: todos.filter(x => !x.done).length
    })
  }, [todos])

  return (
    <div className="d-flex justify-content-between">
      <h1>Todo App 1.0</h1>
      <h2>
        Tasks: {counters.tasks}, Pending: {counters.pending}
      </h2>
    </div>
  );
};
