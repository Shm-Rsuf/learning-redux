const { createStore } = require("redux");
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

    default:
      return state;
  }
};

//store
const store = createStore(todosReducer);

//subscription to store
store.subscribe(() => {
  console.log(store.getState());
});

//action dispatch
store.dispatch({
  type: "todos/addedTodo",
  payload: "learn redux",
});
