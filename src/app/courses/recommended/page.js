"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const recommendedCourses = [
  {
    id: "advanced-js",
    title: "Advanced JavaScript",
    category: "Programming",
    level: "Advanced",
    match: 91,
  },
  {
    id: "ai-basics",
    title: "AI Basics",
    category: "Artificial Intelligence",
    level: "Beginner",
    match: 88,
  },
  {
    id: "tailwind",
    title: "Tailwind CSS Mastery",
    category: "UI / Frontend",
    level: "Intermediate",
    match: 85,
  },
  {
    id: "react",
    title: "React.js Professional",
    category: "Frontend Development",
    level: "Intermediate",
    match: 90,
  },
];

export default function RecommendedCoursesPage() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white">

      {/* PAGE HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          🤖 Recommended For You
        </h1>
        <p className="mt-4 text-white/80 text-lg">
          Personalized courses based on your learning progress and interests.
        </p>
      </div>

      {/* COURSES GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {recommendedCourses.map((course, index) => (
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
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold">
                  {course.title}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-green-400/20 text-green-300">
                  AI Match
                </span>
              </div>

              {/* INFO */}
              <p className="text-white/80 text-sm mb-4">
                {course.category} • {course.level}
              </p>

              {/* MATCH */}
              <div className="flex justify-between text-sm text-white/70 mb-1">
                <span>Skill Match</span>
                <span>{course.match}%</span>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${course.match}%` }}
                  transition={{ duration: 0.9 }}
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
