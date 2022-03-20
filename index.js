const { createStore } = require('redux');

var initialState = {
  age: 21,
};
const reducer = (state = initialState, action) => {
  var newState = { ...state };
  if (action.type == 'ADD') {
    newState.age += 1;
  }

  return newState;
};
const store = createStore(reducer);

store.subscribe(() => {
  console.log('State Changed');
});
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });

console.log(`Hello Node.js (${JSON.stringify(store.getState())}!`);
