"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Artificial Intelligence",
    short: "AI",
    courses: 18,
    color: "from-purple-500 to-indigo-600",
    icon: "🤖",
  },
  {
    name: "Programming",
    short: "Code",
    courses: 42,
    color: "from-blue-500 to-cyan-600",
    icon: "💻",
  },
  {
    name: "Design & UI",
    short: "Design",
    courses: 21,
    color: "from-pink-500 to-rose-600",
    icon: "🎨",
  },
  {
    name: "Health & Fitness",
    short: "Health",
    courses: 12,
    color: "from-green-500 to-emerald-600",
    icon: "💪",
  },
  {
    name: "Mathematics",
    short: "Math",
    courses: 25,
    color: "from-yellow-500 to-orange-600",
    icon: "📐",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 text-white">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Explore Categories
        </h1>
        <p className="mt-4 text-white/80 text-lg">
          Choose a category and unlock structured learning paths.
        </p>
      </div>

      {/* CATEGORY GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.07 }}
            className={`cursor-pointer rounded-2xl p-6 shadow-xl bg-gradient-to-br ${cat.color} relative overflow-hidden`}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></div>

            {/* ICON */}
            <div className="text-5xl mb-4">{cat.icon}</div>

            {/* TITLE */}
            <h3 className="text-2xl font-bold">
              {cat.name}
            </h3>

            {/* INFO */}
            <p className="mt-2 text-white/80 text-sm">
              {cat.courses}+ courses available
            </p>

            {/* TAG */}
            <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-black/30">
              {cat.short}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
