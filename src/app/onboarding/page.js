"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const [headingText, setHeadingText] = useState("");
  const fullText = "Welcome to AI Learning Platform!";

  // Typewriter animation for heading
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setHeadingText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Optional: Voice greeting
  useEffect(() => {
    const utter = new SpeechSynthesisUtterance(
      "Welcome to AI Learning Platform! Start exploring courses and improve your skills today."
    );
    utter.lang = "en-US";
    utter.rate = 0.9;
    setTimeout(() => {
      window.speechSynthesis.speak(utter);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-500 via-emerald-400 to-lime-400 p-6">

      <motion.div
        className="bg-white/20 backdrop-blur-xl rounded-3xl p-10 max-w-2xl w-full shadow-2xl flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          {headingText}
          <span className="inline-block w-1 h-10 bg-white animate-pulse ml-1"></span>
        </h1>

        {/* Subtext */}
        <p className="text-white/80 text-lg md:text-xl mb-6">
          Learn, Quiz, Analyze — Powered by AI. Start exploring courses and improve your skills today!
        </p>

        {/* Explore Button */}
        <Link
          href="/courses"
          className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition transform"
        >
          Explore Courses →
        </Link>
      </motion.div>

    </div>
  );
}
