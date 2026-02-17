"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function QuizResultPage() {
  const params = useSearchParams();
  const score = params.get("score") || 0;
  const total = params.get("total") || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-400 flex flex-col justify-center items-center p-6">

      <motion.div
        className="bg-white/20 backdrop-blur-xl rounded-3xl p-10 max-w-md w-full shadow-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Quiz Completed!
        </h1>
        <p className="text-white/80 text-lg mb-6">
          You scored <span className="font-bold text-yellow-300">{score}</span> out of <span className="font-bold text-yellow-300">{total}</span>
        </p>
        <motion.a
          href="/quiz"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform"
        >
          Take Another Quiz
        </motion.a>
      </motion.div>
    </div>
  );
}
