"use client";

import { useState, useEffect } from "react";
import { evaluateExam } from "@/lib/examEngine";
import { motion, AnimatePresence } from "framer-motion";

export default function ExamSimulator() {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(evaluateExam(Number(score)));
  }, [score]);

  const getBarColor = () => {
    if (score >= 85) return "from-green-400 to-emerald-500";
    if (score >= 60) return "from-yellow-400 to-yellow-500";
    return "from-red-400 to-red-600";
  };

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-black to-slate-900 text-white flex flex-col items-center">

      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">Exam Simulator</h1>

      {/* Score Range Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="w-full md:w-1/2 h-2 bg-white/20 rounded-full accent-indigo-500"
      />

      {/* Score Bar */}
      <div className="w-full md:w-1/2 h-4 bg-white/20 rounded-full mt-4 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${getBarColor()}`}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Score Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={score}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-6 text-xl md:text-2xl font-semibold text-center"
        >
          Score: {score}%
        </motion.div>
      </AnimatePresence>

      {/* Result Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 p-6 rounded-2xl shadow-xl bg-white/10 backdrop-blur-xl text-center w-full md:w-1/2"
      >
        <p className="text-lg md:text-xl">
          {result}
        </p>
      </motion.div>
    </div>
  );
}
