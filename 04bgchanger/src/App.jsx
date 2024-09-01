import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
 
  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button className="outline-none px-4 bg-red-700 py-1  rounded-full text-white shadow-lg" onClick={()=>setColor("red")} >Red</button>

          <button className="outline-none px-4 bg-green-700 py-1  rounded-full text-white shadow-lg" onClick={()=>setColor("green")}>Green</button>

          <button className="outline-none px-4 bg-blue-700 py-1  rounded-full text-white shadow-lg" onClick={()=>setColor("blue")}>Blue</button>

          <button className="outline-none px-4 bg-pink-700 py-1  rounded-full text-white shadow-lg"onClick={()=>setColor("pink")} >Pink</button>

          <button className="outline-none px-4 bg-violet-700 py-1  rounded-full text-white shadow-lg"  onClick={()=>setColor("violet")}>Violet</button>
          
          <button className="outline-none px-4 bg-indigo-700 py-1  rounded-full text-white shadow-lg" onClick={()=>setColor("Indigo")}>Indigo</button>

          <button className="outline-none px-4 bg-orange-700 py-1  rounded-full text-white shadow-lg"onClick={()=>setColor("orange")} >Orange</button>

          <button className="outline-none px-4 bg-yellow-400 py-1  rounded-full text-white shadow-lg" onClick={()=>setColor("yellow")}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
