"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const bookmarksData = [
  { title: "AI Basics", level: "Beginner", progress: 40 },
  { title: "React 101", level: "Intermediate", progress: 70 },
  { title: "Advanced JS", level: "Advanced", progress: 15 },
  { title: "Python", level: "Advanced", progress: 25 },
  { title: "ML/DL", level: "Advanced", progress: 20 },
];

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Simulate fetching bookmarked courses
    setTimeout(() => {
      setBookmarks(bookmarksData);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">Bookmarked Courses</h1>
        <p className="mt-4 text-white/80 text-lg">
          Quick access to your favorite learning paths. Continue where you left off!
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {bookmarks.map((course, idx) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl relative overflow-hidden cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
            <p className="text-white/80 mb-4">Level: {course.level}</p>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <span className="absolute top-4 right-4 text-sm bg-black/30 px-2 py-1 rounded-full">
              {course.progress}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
