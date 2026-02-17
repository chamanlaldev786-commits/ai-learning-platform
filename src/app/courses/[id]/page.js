"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mockCourses } from "@/lib/data";

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = mockCourses.find((c) => c.id === id);

  const [headingText, setHeadingText] = useState("");
  const [voiceOn, setVoiceOn] = useState(true);

  useEffect(() => {
    if (!course) return;
    let i = 0;
    const interval = setInterval(() => {
      setHeadingText(course.title.slice(0, i + 1));
      i++;
      if (i > course.title.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [course]);

  useEffect(() => {
    const saved = localStorage.getItem("voiceOn");
    if (saved !== null) setVoiceOn(saved === "true");
  }, []);

  if (!course)
    return <div className="p-20 text-white">Course not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-pink-700 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto bg-white/10 p-10 rounded-3xl backdrop-blur-lg">

        <h1 className="text-5xl font-extrabold mb-4">
          {headingText}
          <span className="inline-block w-1 h-10 bg-white animate-pulse ml-1" />
        </h1>

        <p className="text-white/80 mb-6">{course.description}</p>

        <div className="mt-8 flex gap-4">
          <Link
            href={`/courses/${id}/lessons`}
            className="px-6 py-3 bg-white text-indigo-700 rounded-full font-bold"
          >
            📘 Start Learning
          </Link>

          <Link
            href={`/quiz/${id}`}
            className="px-6 py-3 bg-indigo-900 rounded-full"
          >
            🧠 Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
