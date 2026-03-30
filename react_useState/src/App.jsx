import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 font-sans p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 tracking-wide uppercase">
        Counter
      </h1>
      <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6 border border-gray-200 w-full max-w-sm">
        <h2 className="text-7xl font-extrabold text-blue-600 my-4 tabular-nums">
          {count}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          <button
            onClick={decrement}
            className="w-16 h-16 flex items-center justify-center text-4xl font-bold bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 active:scale-95 transition-all shadow-sm"
          >
            -
          </button>
          <button
            onClick={reset}
            className="px-8 py-4 text-xl font-bold bg-neutral-200 text-neutral-700 rounded-xl hover:bg-neutral-300 active:scale-95 transition-all shadow-sm uppercase tracking-wider"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="w-16 h-16 flex items-center justify-center text-4xl font-bold bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 active:scale-95 transition-all shadow-sm"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
