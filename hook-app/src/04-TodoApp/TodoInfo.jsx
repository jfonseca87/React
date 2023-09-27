import { useEffect, useState } from "react";

export const TodoInfo = ({ todos }) => {
  const [counters, setCounters] = useState({
    total: 0,
    pending: 0,
  });

  const calculateCounters = () => {
    const total = todos.length;
    const pending = todos.filter((x) => x.done === false).length;

    setCounters({
      total: total,
      pending: pending
    });
  };

  useEffect(() => {
    calculateCounters();
  }, [todos])

  return (
    <div className="d-flex justify-content-between">
      <h1>Todo App 1.0</h1>
      <h2>
        Tasks: {counters.total}, <small>Pending: {counters.pending}</small>
      </h2>
    </div>
  );
};
