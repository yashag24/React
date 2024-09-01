import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj ={
    username:"Yash",
    Age:21
  }
  return (
    <>
      <h1 className=" text-pink-500 bg-white rounded-lg">Tailwind Test</h1>
     <Card username ='Chai aur Code'Someobj ={myObj}/>
     <Card username ='Harry'Someobj ={myObj}/>
    </>
  );
}

export default App;
