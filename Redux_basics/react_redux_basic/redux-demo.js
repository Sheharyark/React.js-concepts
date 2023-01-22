const redux = require('redux')
//reducer fxn should be pure fxn
// i.e inputs and gives expected output
const counterReducer = (state = { counter: 0 }, action) => {
  //here I am using action to dispacth the counter
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }
  return state
}

//here I create the store and get the latest
//state of the store or state itselg
const store = redux.createStore(counterReducer)
// console.log(store.getState())
const counterSubscriber = () => {
  const latestState = store.getState()
  console.log(latestState)
}

//here I subcribed to the redux subscription of state updation
store.subscribe(counterSubscriber)

//here I dispatch the action type for the new or tiggered state values
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
