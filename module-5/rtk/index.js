const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");

// console.log(`Initial state: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
  // console.log(store.getState());
});

// disptach actions
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());

// store.dispatch(dynamicCounterActions.increment(2));

// store.dispatch(dynamicCounterActions.increment(3));

// store.dispatch(dynamicCounterActions.decrement(5));
