"use client";

import { useState, useEffect } from "react";
import { mockUser } from "@/lib/mockApi";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser(mockUser);
    }, 500);
  }, []);

  if (!user)
    return (
      <p className="p-6 text-green-700 font-semibold text-lg">Loading profile...</p>
    );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-green-50 to-green-100">

      <div className="flex-1 flex flex-col">

        <main className="p-6 max-w-4xl mx-auto flex-1 space-y-6">
          {/* Profile Card */}
          <motion.section
            className="bg-white shadow-2xl rounded-2xl p-6 flex flex-col items-center md:items-start md:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-green-200 flex items-center justify-center text-3xl text-green-700 font-bold">
              {user.name.charAt(0)}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-green-700 mb-2">{user.name}</h1>
              <p className="text-green-600 mb-1">Email: {user.email}</p>
              <p className="text-green-600 mb-1">Member since: {user.joined}</p>
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section
            className="bg-white shadow rounded-2xl p-6 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-green-700 mb-3">About</h2>
            <p className="text-green-600 leading-relaxed">{user.bio}</p>
          </motion.section>
        </main>

      </div>
    </div>
  );
}
