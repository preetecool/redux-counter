import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {useAppDispatch, useAppSelector} from './app/hooks'
import { incremented, decremented, reset } from "./features/counter/CounterSlice";

function App() {
const count = useAppSelector((state) => state.counter.value);

const dispatch = useAppDispatch();

const handleIncrease= () => {
  dispatch(incremented());
}

const handleDecrease = () => {
  if(count > 0) dispatch(decremented());
  else return;
}

const handleReset = () => {
  dispatch(reset());
}

  return (
    <div className="App">
      <header className="App-header">
       
        <p> count is: {count}</p>
        <p>
          <button type="button" onClick={handleIncrease}>
            Add
          </button>
          <br/>
          <button type="button" onClick={handleDecrease}>
            Remove
          </button>
          <br/>
          <button type="button" onClick={handleReset}>
            Reset Count
          </button>
          

        </p>  
      </header>
    </div>
  )
}

export default App
