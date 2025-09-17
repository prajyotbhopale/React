  import { useState } from "react";
  import reactLogo from "./assets/react.svg";
  import viteLogo from "/vite.svg";
  import "./App.css";

  function App() {
    const [color, SetColor] = useState("olive");
    return (
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center items-center gap-3  bg-white rounded-3xl  px-3 py-2 ">
          <button
            onClick={() => SetColor("red")}
            className="text-black px-4 py-1 rounded-full shadow-lg cursor-pointer bg-red-600"
          >
            red
          </button>
          <button
            onClick={() => SetColor("green")}
            className="text-black px-4 py-1 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => SetColor("pink")}
            className="text-black px-4 py-1 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => SetColor("blue")}
            className="text-black px-4 py-1 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => SetColor("orange")}
            className="text-black px-4 py-1 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => SetColor("violet")}
            className="text-black px-4 py-1 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>
        </div>
      </div>
    );
  }

  export default App;
