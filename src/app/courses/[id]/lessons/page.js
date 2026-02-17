"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mockCourses } from "@/lib/mockApi";

export default function LessonsPage() {
  const { id } = useParams();
  const [voiceOn, setVoiceOn] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("voiceOn");
      return saved === "true";
    }
    return true;
  });

  const course = mockCourses.find((c) => c.id === id);

  const speak = (text) => {
    if (!voiceOn) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  if (!course)
    return <div className="p-20 text-white">Course not found</div>;

  // Fake lessons (frontend-only rule)
  const lessons = Array.from({ length: 8 }).map((_, i) => ({
    id: `lesson-${i + 1}`,
    title: `Lesson ${i + 1}`,
    duration: "10 min",
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white p-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center">
        {course.title}
      </h1>

      <motion.ul className="grid md:grid-cols-2 gap-6">
        {lessons.map((lesson, i) => (
          <motion.li
            key={lesson.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            onMouseEnter={() => speak(lesson.title)}
            className="p-6 bg-white/10 rounded-2xl hover:scale-105 transition relative"
          >
            <h3 className="text-xl font-bold">{lesson.title}</h3>
            <p className="text-white/70">{lesson.duration}</p>

            <Link
              href={`/courses/${id}/lessons/${lesson.id}`}
              className="absolute bottom-4 right-4 text-green-400"
            >
              Start →
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
