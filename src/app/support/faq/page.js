"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockFAQ } from "@/lib/mockApi";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-6">
      <motion.div
        className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-4xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {mockFAQ.map((item, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ borderRadius: 12 }}
              className="bg-white/30 rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 flex justify-between items-center font-semibold text-indigo-900 focus:outline-none"
              >
                {item.question}
                <span className="text-indigo-700 font-bold text-xl">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-4 text-indigo-800 border-t border-indigo-200"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
