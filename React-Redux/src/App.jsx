
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementByAmount } from "./app/counterSlices";
function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>Learning redux </h1>
      <div style={{ fontSize: "50px" }}> Counter = {counter}</div>
      <button style={{ fontSize: "30px" }} onClick={incrementCounter}>
        Increment
      </button>
      <button style={{ fontSize: "30px" }} onClick={decrementCounter}>
        Decrement
      </button>
      <button
        style={{ fontSize: "30px" }}
        onClick={() => dispatch(incrementByAmount(10))}
      >
        increment by 10
      </button>
    </>
  );
}
export default App;
