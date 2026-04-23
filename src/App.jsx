import { useState } from "react";
import {  Minus, Plus, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0c] p-6 selection:bg-purple-500/30">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-600/20 blur-[120px] rounded-full"></div>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Interactive Counter
      </motion.h1>

      {/* Main Glass Card */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass relative z-10 p-12 rounded-[40px] border border-white/10 shadow-2xl w-80 text-center backdrop-blur-2xl bg-white/5"
      >
        <h2 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-6">Current Value</h2>

        <div className="relative h-32 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={count}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-8xl font-black text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              {count}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12">
          {/* Decrement */}
          <button
            onClick={() => setCount(count - 1)}
            className="w-full aspect-square flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/50 text-white transition-all duration-300 group"
          >
            <Minus size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Reset */}
          <button
            onClick={() => setCount(0)}
            className="w-full aspect-square flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/50 text-white transition-all duration-300 group"
          >
            <RotateCcw size={24} className="group-hover:rotate-[-45deg] transition-transform" />
          </button>

          {/* Increment */}
          <button
            onClick={() => setCount(count + 1)}
            className="w-full aspect-square flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-green-500/20 hover:border-green-500/50 text-white transition-all duration-300 group"
          >
            <Plus size={24} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </motion.div>

      <p className="mt-8 text-gray-500 text-sm font-mono">Build with React.js  & Framer Motion</p>
    </div>
  );
}