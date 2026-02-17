"use client";

import { useState, useEffect, useMemo } from "react";
import { mockUserProgress } from "@/lib/mockApi";
import { motion } from "framer-motion";

export default function ProgressPage() {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProgress(mockUserProgress);
      setLoading(false);
    }, 800);
  }, []);

  // 🔢 Overall progress calculation
  const overallProgress = useMemo(() => {
    if (!progress.length) return 0;
    const total = progress.reduce((acc, item) => acc + item.progress, 0);
    return Math.round(total / progress.length);
  }, [progress]);

  // 🧠 Status logic
  const getStatus = (value) => {
    if (value >= 80) return { label: "Excellent 🚀", color: "text-green-600" };
    if (value >= 50) return { label: "Good 👍", color: "text-yellow-600" };
    return { label: "Needs Focus ⚠️", color: "text-red-600" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* 🔥 PAGE HEADER */}
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-10">
          Learning Progress Dashboard
        </h1>

        {/* 🧩 BIG INFO SECTION */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Overall Progress */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/40 backdrop-blur-xl p-6 rounded-3xl shadow-xl text-center"
          >
            <p className="text-gray-600 font-semibold">Overall Progress</p>
            <div className="relative w-32 h-32 mx-auto mt-4">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                  fill="none"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#8b5cf6"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{
                    strokeDashoffset:
                      283 - (283 * overallProgress) / 100,
                  }}
                  transition={{ duration: 1.5 }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-purple-700">
                {overallProgress}%
              </span>
            </div>
            <p
              className={`mt-3 font-semibold ${
                getStatus(overallProgress).color
              }`}
            >
              {getStatus(overallProgress).label}
            </p>
          </motion.div>

          {/* Courses Count */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/40 backdrop-blur-xl p-6 rounded-3xl shadow-xl text-center"
          >
            <p className="text-gray-600 font-semibold">Total Courses</p>
            <h2 className="text-5xl font-extrabold text-indigo-600 mt-4">
              {progress.length}
            </h2>
            <p className="text-gray-500 mt-2">Active learning tracks</p>
          </motion.div>

          {/* Lessons Remaining */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/40 backdrop-blur-xl p-6 rounded-3xl shadow-xl text-center"
          >
            <p className="text-gray-600 font-semibold">Lessons Remaining</p>
            <h2 className="text-5xl font-extrabold text-pink-600 mt-4">
              {progress.reduce(
                (acc, item) => acc + item.remainingLessons,
                0
              )}
            </h2>
            <p className="text-gray-500 mt-2">Keep pushing 💪</p>
          </motion.div>
        </div>

        {/* 📊 COURSE PROGRESS LIST */}
        <div className="grid md:grid-cols-2 gap-6">
          {!loading &&
            progress.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/50 backdrop-blur-xl p-6 rounded-3xl shadow-xl"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.course}
                  </h2>
                  <span
                    className={`text-sm font-semibold ${
                      getStatus(item.progress).color
                    }`}
                  >
                    {getStatus(item.progress).label}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.2 }}
                    className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>

                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>{item.progress}% completed</span>
                  <span>{item.remainingLessons} lessons left</span>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
