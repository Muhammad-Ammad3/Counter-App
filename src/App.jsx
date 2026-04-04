import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
      
      {/* Top heading */}
      <h1 className="text-5xl font-extrabold text-white mb-12 drop-shadow-lg">
        Counter App 
      </h1>

      {/* Center Card with green shade */}
      <div className="bg-purple-600 shadow-2xl rounded-3xl p-16 w-96 max-w-full text-center transition-all duration-300">
        
        <h2 className="text-4xl font-bold text-white mb-8">
          Counter
        </h2>

        <div className="text-7xl font-extrabold text-white mb-10">
          {count}
        </div>

        <div className="flex justify-center gap-6">
          
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            +
          </button>

        </div>

      </div>
    </div>
  );
}