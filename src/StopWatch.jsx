import { useState, useRef, useEffect } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  let intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function startClock() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function endClock() {
    setIsRunning(false);
  }

  function resetClock() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${miliseconds}`;
  }

  return (
    <div className="min-h-screen min-w-screen overflow-x-hidden flex items-center justify-center font-sans p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-8">
        <div className="bg-gray-900 rounded-lg p-6 text-center text-white text-2xl shadow-inner">
          {formatTime()}
        </div>
        <div className="flex justify-center space-x-4">
          {!isRunning ? (
            <button
              className="w-28 h-28 rounded-full bg-green-500 text-white text-2xl font-semibold shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-200 ease-in-out"
              onClick={startClock}
            >
              Start
            </button>
          ) : (
            <button
              className="w-28 h-28 rounded-full bg-red-500 text-white text-2xl font-semibold shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-200 ease-in-out"
              onClick={endClock}
            >
              Stop
            </button>
          )}
          <button
            className="w-28 h-28 rounded-full bg-gray-600 text-white text-2xl font-semibold shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-200 ease-in-out"
            onClick={resetClock}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
