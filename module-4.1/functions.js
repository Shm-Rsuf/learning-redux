const fetch = require("node-fetch");

const fetchTodos = async (dispatch, getState) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const todos = await res.json();

  dispatch({
    type: "todos/loadedTodo",
    payload: todos,
  });

  console.log(`Number of todos : ${getState().todos.length}`);
};

module.exports = {
  fetchTodos,
};
