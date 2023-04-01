
import './App.css';
import { useCounter } from "./useCounter";


function App() {


  const [count, increase, decrease, reset] = useCounter()

  return (

    <div className="app">

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

      <h1>{count}</h1>

    </div >
  );
}

export default App;

