"use client";

import { useState, useEffect, useMemo } from "react";
import { mockAnalytics } from "@/lib/mockApi";
import { motion } from "framer-motion";
import BarChart from "@/components/charts/BarChart";

export default function AnalyticsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(mockAnalytics);
      setLoading(false);
    }, 800);
  }, []);

  // 📊 Analytics Calculations
  const totalCourses = data.length;

  const avgScore = useMemo(() => {
    if (!data.length) return 0;
    return (
      data.reduce((acc, d) => acc + (d.score || 0), 0) / data.length
    ).toFixed(1);
  }, [data]);

  const strongestCourse = useMemo(() => {
    if (!data.length) return null;
    return [...data].sort((a, b) => b.score - a.score)[0];
  }, [data]);

  const weakestCourse = useMemo(() => {
    if (!data.length) return null;
    return [...data].sort((a, b) => a.score - b.score)[0];
  }, [data]);

  const performanceStatus = (score) => {
    if (score >= 80) return "Excellent 🚀";
    if (score >= 50) return "Good 👍";
    return "Needs Improvement ⚠️";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* 🔥 PAGE TITLE */}
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
          Learning Analytics Dashboard
        </h1>

        {/* 🧩 TOP INSIGHT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "Courses Analyzed",
              value: totalCourses,
              color: "from-blue-500 to-indigo-500",
            },
            {
              title: "Average Score",
              value: `${avgScore}%`,
              color: "from-green-500 to-emerald-500",
            },
            {
              title: "Strongest Area",
              value: strongestCourse?.course || "—",
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Needs Focus",
              value: weakestCourse?.course || "—",
              color: "from-red-500 to-orange-500",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-r ${card.color} text-white p-6 rounded-3xl shadow-xl`}
            >
              <p className="text-sm opacity-90">{card.title}</p>
              <h2 className="text-2xl font-extrabold mt-2">
                {card.value}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* 📈 MAIN ANALYTICS SECTION */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Performance Summary */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-bold text-indigo-700 mb-4">
              Performance Summary
            </h3>

            <ul className="space-y-3 text-gray-700">
              {data.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center"
                >
                  <span>{item.course}</span>
                  <span className="font-semibold">
                    {item.score}% —{" "}
                    <span className="text-sm text-indigo-600">
                      {performanceStatus(item.score)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AI Insight Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-4">
              AI Learning Insights 🤖
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your strongest performance is in{" "}
              <span className="font-bold text-purple-600">
                {strongestCourse?.course || "N/A"}
              </span>
              . To accelerate your learning, spend more time revising{" "}
              <span className="font-bold text-red-600">
                {weakestCourse?.course || "N/A"}
              </span>
              . Consistent practice and quizzes will improve retention.
            </p>
          </motion.div>

          {/* Progress Chart */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              Progress Visualization
            </h3>
            {!loading && <BarChart data={data} />}
          </motion.div>
        </div>

        {/* 🧠 FINAL INSIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-3xl shadow-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold mb-2">
            Keep Learning, Keep Growing 🚀
          </h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            Analytics help you understand where to focus. Use insights,
            track progress, and dominate your learning journey.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
