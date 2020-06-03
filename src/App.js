import React from 'react';
import './App.css';

import {useSelector, useDispatch} from "react-redux"; 
import {increment, decrement} from "./Actions"; 


function App() {
  const counter = useSelector(state => state.counter); 
  const loggedIn = useSelector(state => state.login); 

  const dispatch = useDispatch(); 


  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick = {() => dispatch(increment())}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>

      <p>Logged in? {loggedIn}</p>
    </div>
  );
}

export default App;
