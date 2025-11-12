import { useCounter } from "./stores/useCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
