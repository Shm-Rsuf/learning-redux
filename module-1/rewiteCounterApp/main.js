// // select dom elements
const counterEl = document.querySelector("#counter");
const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");

let count = 0;

incrementEl.addEventListener("click", () => {
  count += 5;
  counterEl.innerText = count;
});

decrementEl.addEventListener("click", () => {
  count -= 2;
  counterEl.innerText = count;
});

// // actions
// const INCREMENT = "increment";
// const DECREMENT = "decrement";

// // actions creator functions
// const increment = (value) => {
//   return {
//     type: INCREMENT,
//     payload: value,
//   };
// };

// const decrement = (value) => {
//   return {
//     type: DECREMENT,
//     payload: value,
//   };
// };

// // initial state
// const initialState = {
//   count: 0,
// };

// //create reducer function
// function counterReducer(state = initialState, action) {
//   if (action.type === "INCREMENT") {
//     return {
//       ...state,
//       count: state.count + action.payload,
//     };
//   } else if (action.type === "DECREMENT") {
//     return {
//       ...state,
//       count: state.count - action.payload,
//     };
//   } else {
//     return state;
//   }
// }

// // create store
// // const store = Redux.createStore(counterReducer);

// const render = () => {
//   const state = store.getState();
//   counterEl.innerText = state.count.toString();
// };

// render();

// store.subscribe(render);

// incrementEl.addEventListener("click", () => {
//   store.dispatch(increment(5));
// });

// decrementEl.addEventListener("click", () => {
//   store.dispatch(decrement(2));
// });
