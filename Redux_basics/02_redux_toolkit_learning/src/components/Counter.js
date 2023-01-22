import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counterStore'
import classes from './Counter.module.css'

const Counter = () => {
  //this fxn is managed for us by redux
  //this fxn recieves state managed by Redux into the fxn
  //and use this code to retrive part of data.
  //this will automatically set up subscription and gives lates count
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)

  //this dispatches an action against our redux store
  //gives us dispatch fxn
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
    console.log('this works after incrementHanlder')
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux </h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increaseByValue</button>

        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
