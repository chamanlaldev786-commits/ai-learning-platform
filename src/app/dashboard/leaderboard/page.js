"use client";

import { useState, useEffect, useMemo } from "react";
import { mockLeaderboard } from "@/lib/mockApi";
import { motion } from "framer-motion";

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLeaders(mockLeaderboard);
      setLoading(false);
    }, 700);
  }, []);

  // 🧠 Top scorer logic
  const topUser = useMemo(() => {
    if (!leaders.length) return null;
    return [...leaders].sort((a, b) => b.points - a.points)[0];
  }, [leaders]);

  // 🎖 Rank badge logic
  const rankBadge = (rank) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return "🔥";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-orange-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* 🔥 PAGE TITLE */}
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-10">
          Global Leaderboard
        </h1>

        {/* 🏆 TOP USER CARD */}
        {topUser && (
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-2xl mb-10 text-center"
          >
            <p className="text-gray-600 font-semibold">Top Performer</p>
            <h2 className="text-3xl font-extrabold text-red-600 mt-2">
              🏆 {topUser.name}
            </h2>
            <p className="text-lg text-gray-700 mt-1">
              {topUser.points} Points
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Leading the competition 🚀
            </p>
          </motion.div>
        )}

        {/* 📊 STATS BAR */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              label: "Total Players",
              value: leaders.length,
              color: "from-red-500 to-pink-500",
            },
            {
              label: "Highest Score",
              value: topUser?.points || 0,
              color: "from-orange-500 to-red-500",
            },
            {
              label: "Competition Level",
              value: "High 🔥",
              color: "from-pink-500 to-purple-500",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-r ${stat.color} text-white p-6 rounded-3xl shadow-xl text-center`}
            >
              <p className="text-sm opacity-90">{stat.label}</p>
              <h3 className="text-4xl font-extrabold mt-2">
                {stat.value}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* 🧩 LEADERBOARD LIST */}
        <div className="space-y-4">
          {!loading &&
            leaders
              .sort((a, b) => b.points - a.points)
              .map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-red-600">
                      #{index + 1}
                    </span>
                    <span className="text-2xl">
                      {rankBadge(index + 1)}
                    </span>
                    <div>
                      <p className="font-bold text-gray-800">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Competitive Learner
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-extrabold text-red-600">
                      {user.points}
                    </p>
                    <p className="text-xs text-gray-500">Points</p>
                  </div>
                </motion.div>
              ))}
        </div>
      </motion.div>
    </div>
  );
}
