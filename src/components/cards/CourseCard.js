"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-xl"
    >
      <h3 className="text-xl font-bold text-white">{course.title}</h3>
      <p className="text-sm text-gray-300 mt-2">{course.desc}</p>

      <div className="flex justify-between mt-4">
        <span className="text-green-400">{course.level}</span>
        <Link
          href={`/courses/${course.id}`}
          className="text-indigo-400 hover:underline"
        >
          Start →
        </Link>
      </div>
    </motion.div>
  );
}
