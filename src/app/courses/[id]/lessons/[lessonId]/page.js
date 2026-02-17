"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function LessonPage() {
  const { lessonId } = useParams();
  const [voiceOn, setVoiceOn] = useState(true);
  const [headingText, setHeadingText] = useState("");

  // Typewriter heading
  useEffect(() => {
    let i = 0;
    const text = `Lesson: ${lessonId}`;
    const interval = setInterval(() => {
      setHeadingText(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [lessonId]);

  // Load voice preference
  useEffect(() => {
    const saved = localStorage.getItem("voiceOn");
    if (saved !== null) setVoiceOn(saved === "true");
  }, []);

  // Welcome voice
  useEffect(() => {
    if (!voiceOn) return;
    const u = new SpeechSynthesisUtterance(
      `Welcome to lesson ${lessonId}. Focus carefully.`
    );
    u.lang = "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }, [lessonId, voiceOn]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
        {headingText}
        <span className="inline-block w-1 h-8 bg-white animate-pulse ml-1" />
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-lg"
      >
        <p className="text-white/80 text-lg mb-4">
          This lesson explains concepts with examples and logic.
        </p>

        <ul className="space-y-3">
          {["Concept overview", "Examples", "Practice logic"].map((t, i) => (
            <li
              key={i}
              className="bg-white/20 p-4 rounded-xl hover:scale-105 transition"
            >
              ✅ {t}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
