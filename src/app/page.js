"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [voiceOn, setVoiceOn] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("voiceOn");
      return saved === "true";
    }
    return false;
  });
  const [activeFeature, setActiveFeature] = useState(0);

  /* Save voice preference */
  useEffect(() => {
    localStorage.setItem("voiceOn", voiceOn);
  }, [voiceOn]);

  /* Feature rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "AI Learning Engine",
      desc: "Content adapts in real time based on your strengths & weaknesses.",
      icon: "🤖",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Smart Quizzes",
      desc: "AI-powered questions with instant feedback & difficulty scaling.",
      icon: "🧠",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Deep Analytics",
      desc: "Visual insights, predictions, and learning optimization.",
      icon: "📊",
      color: "from-pink-500 to-red-500",
    },
    {
      title: "AI Recommendations",
      desc: "Personalized roadmap generated just for you.",
      icon: "🚀",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const stats = [
    { label: "Active Learners", value: "120K+" },
    { label: "AI Accuracy", value: "96%" },
    { label: "Courses", value: "450+" },
    { label: "Quizzes Solved", value: "2.1M+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white overflow-hidden">


      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 md:px-6 pt-24 md:pt-36 pb-20 md:pb-32">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight"
        >
          Learn. Quiz. Analyze.
          <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent mt-2">
            Powered by AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 md:mt-8 max-w-3xl text-base md:text-xl text-white/90 px-4"
        >
          Your intelligent learning companion that adapts, analyzes, and evolves
          with you — just like a real mentor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4"
        >
          <Link
            href="/courses"
            className="px-8 md:px-10 py-4 md:py-5 rounded-full bg-white text-indigo-700 font-extrabold text-base md:text-lg hover:scale-105 hover:shadow-2xl transition text-center"
          >
            🚀 Start Learning
          </Link>

          <Link
            href="/dashboard"
            className="px-8 md:px-10 py-4 md:py-5 rounded-full bg-indigo-900 hover:bg-indigo-950 font-extrabold text-base md:text-lg hover:scale-105 hover:shadow-2xl transition text-center"
          >
            📊 AI Dashboard
          </Link>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-28 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-8 text-center hover:scale-105 transition"
          >
            <h3 className="text-2xl md:text-4xl font-extrabold">{s.value}</h3>
            <p className="mt-1 md:mt-2 text-sm md:text-base text-white/80">{s.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20 md:pb-32">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 md:mb-14">
          What Makes Us Different?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${f.color} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl cursor-pointer`}
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4 animate-bounce">{f.icon}</div>
              <h3 className="text-xl md:text-2xl font-extrabold">{f.title}</h3>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-white/90">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Voice Toggle
      <div className="fixed top-6 right-4 md:right-6 z-50">
        <button
          onClick={() => setVoiceOn(!voiceOn)}
          className="px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-full bg-white text-purple-700 font-bold shadow-xl hover:scale-110 transition"
        >
          {voiceOn ? "🔊 Voice ON" : "🔇 Voice OFF"}
        </button>
      </div> */}

      {/* AI Rotating Message */}
      <section className="pb-16 md:pb-28 text-center px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-2xl font-semibold text-white/90"
          >
            🤖 {features[activeFeature].desc}
          </motion.p>
        </AnimatePresence>

      </section>
    </div>
  );
}
