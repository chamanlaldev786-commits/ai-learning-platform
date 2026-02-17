"use client";

import { useState, useEffect, useMemo } from "react";
import { mockCourses } from "@/lib/mockApi";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/cards/AnimatedCard";

export default function AIRecommendationPage() {
  const [recommended, setRecommended] = useState([]);
  const [typedText, setTypedText] = useState("");
  const [loading, setLoading] = useState(true);

  const heading = "AI-Powered Course Recommendations";

  // ⌨️ Typewriter Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(heading.slice(0, i + 1));
      i++;
      if (i > heading.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // 🤖 AI Recommendation Logic (Frontend Simulation)
  useEffect(() => {
    setTimeout(() => {
      const scoredCourses = mockCourses.map((course) => ({
        ...course,
        aiScore: Math.floor(Math.random() * 40) + 60, // AI relevance score
      }));

      const sorted = scoredCourses
        .sort((a, b) => b.aiScore - a.aiScore)
        .slice(0, 8);

      setRecommended(sorted);
      setLoading(false);
    }, 900);
  }, []);

  // 🧠 Insight Calculation
  const avgAIScore = useMemo(() => {
    if (!recommended.length) return 0;
    return Math.round(
      recommended.reduce((acc, c) => acc + c.aiScore, 0) /
      recommended.length
    );
  }, [recommended]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* 🔥 HEADING */}
        <section className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent inline-block">
            {typedText}
            <span className="ml-2 inline-block w-1 h-10 bg-purple-600 animate-pulse"></span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
            Our AI analyzes your learning behavior, progress patterns, and skill
            gaps to recommend the most impactful courses for you.
          </p>
        </section>

        {/* 🧠 AI INSIGHT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Courses Analyzed",
              value: mockCourses.length,
              color: "from-purple-500 to-indigo-500",
            },
            {
              title: "AI Confidence Score",
              value: `${avgAIScore}%`,
              color: "from-pink-500 to-purple-500",
            },
            {
              title: "Recommendation Mode",
              value: "Personalized 🤖",
              color: "from-indigo-500 to-blue-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-3xl shadow-xl text-center`}
            >
              <p className="text-sm opacity-90">{item.title}</p>
              <h2 className="text-3xl font-extrabold mt-2">
                {item.value}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* 📚 RECOMMENDED COURSES */}
        <section>
          <h2 className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
            Top AI Picks for You 🚀
          </h2>

          {loading ? (
            <p className="text-center text-purple-600 animate-pulse">
              AI is thinking...
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recommended.map((course, idx) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <AnimatedCard
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    link={`/courses/${course.id}`}
                    badge={`AI Score ${course.aiScore}%`}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* 🤖 FINAL AI MESSAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl text-center"
        >
          <h3 className="text-3xl font-extrabold text-purple-700 mb-2">
            Your AI Learning Companion 🤖
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            These recommendations adapt as you learn more. Keep completing
            courses, taking quizzes, and your AI mentor will continuously
            refine your learning path.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
