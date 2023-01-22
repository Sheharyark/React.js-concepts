import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css'

const Counter = () => {
  //this fxn is managed for us by redux
  //this fxn recieves state managed by Redux into the fxn
  //and use this code to retrive part of data.
  //this will automatically set up subscription and gives lates count
  const counter = useSelector((state) => state.counter)
  const show = useSelector((state) => state.showCounter)

  //this dispatches an action against our redux store
  //gives us dispatch fxn
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  }

  const incrementHandler = () => {
    dispatch({ type: ' increment' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 })
  }
  return (
    <main className={classes.counter}>
      <h1>Redux </h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment</button>

        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
