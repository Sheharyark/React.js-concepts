import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './authStore'
import authReducer from './counterStore'

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     }
//   }
//   return state
// }

//we pass object
//it is a configuration objec where we set reducer property
//one main reducer fcn
const store = configureStore({
  // reducer: counterSlice.reducer,
  //reducer : {counter : counterSlice.reducer}
  reducer: { counter: counterReducer, auth: authReducer },
})

// const counterSubscribe = () => {
//   const latestCount = store.getState()
//   return latestCount
// }

// store.subscribe(counterSubscribe)

// store.dispatch({ type: 'increment' })
// store.dispatch({ type: 'decrement' })

// //dispatch
// export const counterActions = counterSlice.actions
// export const authActions = authSclice.actions
export default store
