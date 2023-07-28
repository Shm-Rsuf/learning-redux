const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./functions");
const thunk = require("redux-thunk");

// initial state
const initialState = {
  todos: [],
};

//reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/addedTodo":
      return {
        ...state,
        todos: [...state.todos, { title: action.payload }],
      };

    case "todos/loadedTodo":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return state;
  }
};

//store
const store = createStore(todosReducer, applyMiddleware(thunk.default));

//subscription to store
store.subscribe(() => {
  console.log(store.getState());
});

//action dispatch
/* store.dispatch({
  type: "todos/addedTodo",
  payload: "learn redux",
}); */

store.dispatch(fetchTodos);
