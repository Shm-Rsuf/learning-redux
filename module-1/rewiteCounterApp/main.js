// select dom elements
const counterEl = document.querySelector("#counter");
const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");

// initial state
const initialState = {
  count: 0,
};

//create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.count.toString();
};

render();

store.subscribe(render);

incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
