export const todoReducer = (initState, action) => {
  switch (action.type) {
    case "Add":
      return [...initState, action.payload];
    case "ToggleDone":
      return initState.map((task) => {
        if (task.id === action.payload) {
          task.done = !task.done;
        }

        return task;
      });
    case "Remove":
      return initState.filter((x) => x.id !== action.payload);
    default:
      return initState;
  }
};
