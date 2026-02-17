// src/app/register/page.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  // ---------------- STATE ----------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  // ---------------- TYPEWRITER ----------------
  const fullText = "Create your account and start your AI learning journey.";
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

  // ---------------- VOICE ----------------
  useEffect(() => {
    const speak = () => {
      const msg = new SpeechSynthesisUtterance(
        "Welcome. Create your account to unlock smart courses, quizzes, and AI recommendations."
      );
      msg.lang = "en-US";
      msg.rate = 0.95;
      msg.pitch = 0.9;
      window.speechSynthesis.speak(msg);
    };
    setTimeout(speak, 700);
  }, []);

  // ---------------- PASSWORD STRENGTH ----------------
  useEffect(() => {
    const p = formData.password;
    if (p.length < 6) setPasswordStrength("Weak");
    else if (/[A-Z]/.test(p) && /\d/.test(p)) setPasswordStrength("Strong");
    else setPasswordStrength("Medium");
  }, [formData.password]);

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1200));

    if (!formData.name || !formData.email || !formData.password) {
      setError("❌ All fields are required");
      setLoading(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("❌ Invalid email address");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("❌ Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    // Mock save user
    localStorage.setItem(
      "registered_user",
      JSON.stringify(formData)
    );

    alert("✅ Registration successful! Redirecting to login...");
    setLoading(false);
    router.push("/login");
  };

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 overflow-hidden">

        {/* Animated blob */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-full opacity-30 animate-spin-slow" />

        {/* Heading */}
        <h1 className="relative text-2xl md:text-3xl font-extrabold text-purple-800 mb-6">
          {headingText}
          <span className="inline-block w-1 h-7 bg-purple-700 ml-1 animate-pulse" />
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="px-4 py-3 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-400 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="px-4 py-3 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="px-4 py-3 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-400 outline-none"
          />

          {/* Password strength */}
          {formData.password && (
            <div
              className={`text-sm font-bold ${passwordStrength === "Strong"
                ? "text-green-600"
                : passwordStrength === "Medium"
                  ? "text-yellow-600"
                  : "text-red-600"
                }`}
            >
              Password Strength: {passwordStrength}
            </div>
          )}

          {error && (
            <div className="text-red-600 font-semibold text-sm">{error}</div>
          )}

          <button
            disabled={loading}
            className="mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        {/* Links */}
        <div className="mt-5 text-center text-sm text-purple-700">
          <a href="/login" className="hover:underline font-semibold">
            Already have an account? Login
          </a>
        </div>
      </div>

      {/* Animation */}
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
          animation: spin-slow 28s linear infinite;
        }
      `}</style>
    </div>
  );
}
