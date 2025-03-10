import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setCOlor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="flex fixed flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className="px-3 py-2  flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl">
          <button
            onClick={() => setCOlor("red")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Red" }}>
            Red
          </button>
          <button
            onClick={() => setCOlor("Green")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "green" }}>
            Green
          </button>
          <button
            onClick={() => setCOlor("Aqua")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "aqua" }}>
            Aqua
          </button>
          <button
            onClick={() => setCOlor("Azure")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "azure" }}>
            Azure
          </button>
          <button
            onClick={() => setCOlor("Beige")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Beige" }}>
            Beige
          </button>
          <button
            onClick={() => setCOlor("Maroon")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "maroon" }}>
            Maroon
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
