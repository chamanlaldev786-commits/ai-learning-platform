"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ChatPage() {
  const [messages, setMessages] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("community_chat");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  // ---------------- WELCOME VOICE ----------------
  useEffect(() => {
    const msg = new SpeechSynthesisUtterance(
      "Welcome to the community chat. Connect, ask questions, and grow together."
    );
    msg.lang = "en-US";
    msg.rate = 0.95;
    window.speechSynthesis.speak(msg);
  }, []);

  // ---------------- SAVE CHAT ----------------
  useEffect(() => {
    localStorage.setItem("community_chat", JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ---------------- SEND MESSAGE ----------------
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      user: "You",
      text: input,
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // 🤖 AI BOT REPLY WITH ANIMATION
    setTimeout(() => {
      const botMsg = {
        user: "AI Bot",
        text: "Great question! Keep learning and explore courses, quizzes, and dashboards 🚀",
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white flex justify-center items-start pt-12 pb-6">

      <div className="flex flex-col w-full max-w-4xl">
        {/* 💬 PAGE HEADING WITH ANIMATION */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-6 text-center"
        >
          Community Chat
        </motion.h1>

        {/* CHAT AREA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-[60vh] overflow-y-auto p-4 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl space-y-4"
        >
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`flex ${msg.user === "You" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl shadow-lg 
                ${msg.user === "You"
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                    : "bg-white/80 text-gray-900"
                  }`}
              >
                <div className="text-sm font-semibold">{msg.user}</div>
                <div className="mt-1">{msg.text}</div>
                <div className="text-xs opacity-70 mt-1">{msg.time}</div>
              </div>
            </motion.div>
          ))}
          <div ref={bottomRef} />
        </motion.div>

        {/* INPUT AREA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex gap-3"
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 px-5 py-3 rounded-2xl border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendMessage}
            className="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-pink-600 hover:to-purple-700 transition shadow-lg"
          >
            Send 🚀
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
