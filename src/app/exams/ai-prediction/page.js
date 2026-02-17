"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AIPredictionPage() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    // Mock AI-predicted topics
    setTimeout(() => {
      setPredictions([
        { id: 1, topic: "React Hooks Deep Dive", score: 85 },
        { id: 2, topic: "Advanced AI Algorithms", score: 92 },
        { id: 3, topic: "Node.js Performance Tuning", score: 78 },
        { id: 4, topic: "Tailwind CSS Mastery", score: 65 },
      ]);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 p-6 flex flex-col items-center">

      {/* Heading */}
      <motion.section
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 inline-block">
          AI Prediction Dashboard
        </h1>
        <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
          See which topics you are likely to master next, based on AI insights.
        </p>
      </motion.section>

      {/* Predictions Grid */}
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {predictions.map((pred, idx) => (
          <motion.div
            key={pred.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform cursor-pointer"
          >
            <h2 className="text-xl md:text-2xl font-bold text-yellow-300">
              {pred.topic}
            </h2>
            <p className="mt-2 text-white/70">AI Score:</p>
            <div className="mt-2 w-full bg-white/20 h-3 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${pred.score}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
            <p className="mt-1 text-white/70">{pred.score}% predicted mastery</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
