import Counter from "./Counter";
import StopWatch from "./StopWatch";
import Clock from "./Clock";
import Navbar from "./Navbar";
import { useState } from "react";
import Home from "./Home";

function App() {
  const colors = [
    "bg-gray-900",
    "bg-violet-900",
    "bg-purple-900",
    "bg-red-900",
    "bg-pink-900",
    "bg-indigo-900",
  ];
  const [colorIn, setcolorIn] = useState(0);
  const changeColor = () => {
    if (colorIn != 5) {
      setcolorIn((colorIn) => colorIn + 1);
    }
    if (colorIn == 5) {
      setcolorIn((colorIn) => 0);
    }
  };
  return (
    <div
      className={`${colors[colorIn]}
     overflow-x-hidden`}
    >
      <Navbar />
      <div id="home" className="flex items-center justify-center h-screen">
        <Home />
      </div>

      <div id="change-color" className="flex items-center justify-center h-screen">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full w-82 h-82
                       p-16 transform hover:text-6xl hover:scale-110 transition-all duration-300 ease-in-out
                       text-5xl flex justify-center items-center
                       "
          onClick={changeColor}
        >
          Change Color!
        </button>
      </div>
      <div id="counter" className="flex items-center justify-center h-screen">
        <Counter />
      </div>
      <div id="stopwatch" className="flex items-center justify-center h-screen">
        <StopWatch />
      </div>
      <div id="clock" className="flex items-center justify-center h-screen">
        <Clock />
      </div>
    </div>
  );
}

export default App;
