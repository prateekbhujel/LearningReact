import { useState } from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(10);

  // let counter = 0;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }else
    {
      alert("I cannot go below 0");
    }
  };

  return (
    <>
      <h1>chaai aaur react</h1>
      
      <h3>counter value : {counter}</h3>

      <button onClick= {addValue}>
        Add Value : {counter}
      </button>
      
      <br />
      
      <button onClick = {removeValue}>
        Remove Value :  {counter}
      </button>
      
      <p>
        Footer: {counter}
      </p>
    </>
  )
}

export default App
