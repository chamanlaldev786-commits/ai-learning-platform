// src/app/login/page.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  // ---------------- STATES ----------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ---------------- TYPEWRITER ----------------
  const fullText =
    "Welcome Back! Login to continue your AI-powered learning journey.";
  const [headingText, setHeadingText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setHeadingText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // ---------------- VOICE WELCOME ----------------
  useEffect(() => {
    const speak = () => {
      const msg = new SpeechSynthesisUtterance(
        "Welcome to the AI Learning Platform. Please login to continue."
      );
      msg.lang = "en-US";
      msg.rate = 0.95;
      msg.pitch = 0.9;
      msg.voice =
        speechSynthesis
          .getVoices()
          .find((v) => v.name.toLowerCase().includes("male")) || null;

      window.speechSynthesis.speak(msg);
    };

    setTimeout(speak, 600);
  }, []);

  // ---------------- LOGIN LOGIC ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1200));

    // Mock users
    if (email === "user@example.com" && password === "password123") {
      localStorage.setItem("user_role", "student");
      router.push("/dashboard");
    } else if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("user_role", "admin");
      router.push("/dashboard/analytics");
    } else {
      setError("❌ Invalid email or password");
    }

    setLoading(false);
  };

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 overflow-hidden">

        {/* Animated background blob */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full opacity-30 animate-spin-slow" />

        {/* Heading */}
        <h1 className="relative text-2xl md:text-3xl font-extrabold text-purple-800 mb-6 leading-snug">
          {headingText}
          <span className="inline-block w-1 h-7 bg-purple-700 ml-1 animate-pulse" />
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="relative flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-400 outline-none transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-400 outline-none transition"
            required
          />

          {error && (
            <div className="text-red-600 font-semibold text-sm">{error}</div>
          )}

          <button
            disabled={loading}
            className="mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-60"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        {/* Links */}
        <div className="mt-5 text-center text-sm text-purple-700">
          <a href="/register" className="hover:underline font-semibold">
            Don’t have an account? Create one
          </a>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
