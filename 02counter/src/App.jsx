import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter,setCounter]=  useState(5)
  //let counter = 5; setcounter is a  function to update value of counter

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter)
  };

  const removeVal =()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h2>chai aur react</h2>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeVal}>Remove: {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
