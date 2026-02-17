"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-purple-500 via-pink-500 to-pink-400 p-6">
      <motion.div
        className="w-full max-w-3xl bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8">
          Feedback
        </h1>

        <AnimatePresence>
          {submitted ? (
            <motion.p
              key="thankyou"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white/30 text-white p-4 rounded-xl text-center shadow-lg font-semibold"
            >
              Thank you for your feedback! 🌟
            </motion.p>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-white font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl border border-white/40 bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl border border-white/40 bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-xl border border-white/40 bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-bold transition transform hover:scale-105 shadow-lg"
              >
                Submit Feedback
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
