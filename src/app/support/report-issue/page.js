// src/app/support/report-issue/page.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReportIssuePage() {
  const [form, setForm] = useState({ name: "", email: "", issue: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Issue reported:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", issue: "" });
    setTimeout(() => setSubmitted(false), 4000); // auto-hide message
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-purple-100 to-indigo-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center drop-shadow-lg">
          Report an Issue
        </h1>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-100 text-green-800 p-4 rounded-xl mb-6 text-center shadow-lg"
            >
              ✅ Your issue has been submitted! Thank you.
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Floating Input */}
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full border-b-2 border-purple-300 bg-transparent py-2 px-1 focus:outline-none focus:border-purple-500 transition"
              />
              <label className="absolute left-1 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-purple-600 peer-focus:text-sm">
                {field.label}
              </label>
            </div>
          ))}

          {/* Textarea */}
          <div className="relative">
            <textarea
              name="issue"
              value={form.issue}
              onChange={handleChange}
              placeholder=" "
              rows="5"
              required
              className="peer w-full border-b-2 border-purple-300 bg-transparent py-2 px-1 resize-none focus:outline-none focus:border-purple-500 transition"
            />
            <label className="absolute left-1 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-purple-600 peer-focus:text-sm">
              Describe the Issue
            </label>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            Submit Issue
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
