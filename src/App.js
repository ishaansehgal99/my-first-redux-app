import React from 'react';
import './App.css';

import {useSelector, useDispatch} from "react-redux"; 
import {increment, decrement, multiply, halve, performOperation, clearOperations} from "./Actions"; 


function App() {
  const counter = useSelector(state => state.counter); 
  const num_operations = useSelector(state => state.operations); 
  const loggedIn = useSelector(state => state.login); 

  const dispatch = useDispatch(); 


  return (
    <div className="App">

      <p>Num Operations: {num_operations} </p>
      <p>Counter: {counter}</p>

      <button onClick = {() => {dispatch(increment()); dispatch(performOperation())}}>+</button>
      <button onClick = {() => {dispatch(decrement()); dispatch(performOperation())}}>-</button>
      <button onClick = {() => {dispatch(multiply()); dispatch(performOperation())}}>*</button>
      <button onClick = {() => {dispatch(halve()); dispatch(performOperation())}}>/</button>
      <button onClick = {() => dispatch(clearOperations())}>Clear</button>

      <p>Logged in? {loggedIn}</p>
    </div>
  );
}

export default App;
