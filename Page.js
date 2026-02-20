"use client";

import { useEffect, useState } from "react";
import { getProgress } from "@/lib/userBrain";
import { getAIRecommendation } from "@/lib/aiEngine";
import ProgressChart from "@/components/charts/ProgressChart";
import { motion } from "framer-motion";

export default function Dashboard() {
  const data = getProgress();
  const ai = getAIRecommendation({
    score: data.score,
    progress: data.completedLessons.length * 10,
  });

  const [headingText, setHeadingText] = useState("");
  const fullText = "Welcome Back, Learner!";

  // Typewriter heading
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setHeadingText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Voice for AI insight
  const [voiceOn, setVoiceOn] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("vioceOn");
      if (saved !== null) setVoiceOn(saved === "true")
    }
  }, [])
  useEffect(() => {
    if (voiceOn) {
      const u = new SpeechSynthesisUtterance(
        `Your AI recommends: ${ai.message}. Suggested action: ${ai.action}`
      );
      u.lang = "en-US";
      u.rate = 0.95;
      u.pitch = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  }, [ai, voiceOn]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-10 text-white flex flex-col gap-8">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold relative">
        {headingText}
        <span className="inline-block w-1 h-8 bg-white animate-pulse ml-1"></span>
      </h1>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 p-6 rounded-3xl backdrop-blur shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
        <ProgressChart value={data.completedLessons.length * 10} />
      </motion.div>

      {/* AI Insights */}
      <motion.div
        className="p-6 rounded-2xl bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-lg relative overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-2">AI Insights</h2>
        <p className="mb-2">{ai.message}</p>
        <p className="text-green-400 font-semibold">{ai.action}</p>

        {/* Decorative gradient circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 opacity-30 rounded-full animate-spin-slow pointer-events-none"></div>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {ai.recommendations?.map((rec, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white/10 rounded-xl shadow hover:shadow-lg cursor-pointer transition flex flex-col gap-2"
          >
            <h3 className="font-bold text-lg">{rec.title}</h3>
            <p className="text-white/80">{rec.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
