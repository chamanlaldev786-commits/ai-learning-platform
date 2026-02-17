"use client";

import { useState, useEffect } from "react";
import AnimatedCard from "@/components/cards/AnimatedCard";
import { mockQuizzes } from "@/lib/mockApi";
import { motion } from "framer-motion";

export default function QuizLandingPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setQuizzes(mockQuizzes.slice(0, 6)); // top 6 quizzes
      setLoading(false);
    }, 700);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-400 flex flex-col justify-center items-center p-6">

      <motion.div
        className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 max-w-7xl w-full shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading Section */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            Choose a Quiz
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            Test your knowledge with AI-generated questions and track your progress.
          </p>
        </section>

        {/* Quizzes Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="h-48 bg-white/20 animate-pulse rounded-2xl shadow-xl"
              />
            ))
            : quizzes.map((quiz, idx) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <AnimatedCard
                  title={quiz.title}
                  description={quiz.description}
                  image={quiz.image}
                  link={`/quiz/${quiz.id}`}
                />
              </motion.div>
            ))}
        </section>
      </motion.div>
    </div>
  );
}
