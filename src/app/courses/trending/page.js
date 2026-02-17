"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const trendingCourses = [
  {
    id: "ai-basics",
    title: "AI Basics",
    category: "Artificial Intelligence",
    level: "Beginner",
    popularity: 92,
  },
  {
    id: "react",
    title: "React 101",
    category: "Frontend Development",
    level: "Intermediate",
    popularity: 88,
  },
  {
    id: "data-science",
    title: "Data Science Intro",
    category: "Data Science",
    level: "Beginner",
    popularity: 85,
  },
  {
    id: "typescript",
    title: "TypeScript Mastery",
    category: "Programming",
    level: "Intermediate",
    popularity: 80,
  },
];

export default function TrendingCoursesPage() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white">

      {/* PAGE HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          🔥 Trending Courses
        </h1>
        <p className="mt-4 text-white/80 text-lg">
          Most popular courses learners are enrolling in right now.
        </p>
      </div>

      {/* COURSES GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {trendingCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
          >
            <Link
              href={`/courses/${course.id}`}
              className="block bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold">
                  {course.title}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300">
                  🔥 Trending
                </span>
              </div>

              {/* INFO */}
              <p className="text-white/80 text-sm mb-4">
                {course.category} • {course.level}
              </p>

              {/* POPULARITY */}
              <div className="flex justify-between text-sm text-white/70 mb-1">
                <span>Popularity</span>
                <span>{course.popularity}%</span>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${course.popularity}%` }}
                  transition={{ duration: 0.9 }}
                  className="h-full bg-gradient-to-r from-pink-400 to-orange-400"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
