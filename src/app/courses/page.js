"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { coursesData, levelColors } from "@/lib/data";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = searchTerm
    ? coursesData.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : coursesData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 px-4 md:px-6 lg:px-8 py-8 md:py-12">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4"
        >
          Explore Courses
        </motion.h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Choose a course and start your smart learning journey.
        </p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
        >
          <input
            type="text"
            placeholder="Search courses by title, category, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none text-gray-700 text-sm md:text-base"
          />
        </motion.div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/courses/${course.id}`}
                  className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-purple-300 h-full"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition flex-1">
                      {course.title}
                    </h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${levelColors[course.level]} ml-2 whitespace-nowrap`}
                    >
                      {course.level}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                      {course.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Lessons Count */}
                  <div className="mb-4 text-sm text-gray-500">
                    📚 {course.lessons?.length || 0} Lessons
                  </div>

                  {/* Progress */}
                  <div className="mt-auto">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto mt-12 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/courses/trending"
            className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl hover:scale-105 transition shadow-lg text-center"
          >
            <div className="text-3xl mb-2">🔥</div>
            <h3 className="font-bold text-lg">Trending</h3>
          </Link>
          <Link
            href="/courses/recommended"
            className="p-6 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl hover:scale-105 transition shadow-lg text-center"
          >
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="font-bold text-lg">Recommended</h3>
          </Link>
          <Link
            href="/courses/categories"
            className="p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl hover:scale-105 transition shadow-lg text-center"
          >
            <div className="text-3xl mb-2">📂</div>
            <h3 className="font-bold text-lg">Categories</h3>
          </Link>
          <Link
            href="/courses/bookmarks"
            className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl hover:scale-105 transition shadow-lg text-center"
          >
            <div className="text-3xl mb-2">🔖</div>
            <h3 className="font-bold text-lg">Bookmarks</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
