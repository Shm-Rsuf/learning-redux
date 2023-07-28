const fetch = require("node-fetch");

const fetchTodosMiddleware = (store) => (next) => async (action) => {
  if (action.type === "todos/fetchTodo") {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const todos = await res.json();

    store.dispatch({
      type: "todos/loadedTodo",
      payload: todos,
    });

    return;
  }
  return next(action);
};

module.exports = {
  fetchTodosMiddleware,
};
