"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaRobot } from "react-icons/fa";

// Mock threads data
const mockThreads = [
  {
    id: "1",
    title: "Getting Started with AI",
    messages: [
      { user: "John", text: "How do I start learning AI?", time: "10:00 AM" },
      { user: "AI Bot", text: "Start with Python basics and then move to machine learning libraries.", time: "10:02 AM" }
    ]
  }
];

export default function ThreadPage({ params }) {
  const { id } = params;
  const [message, setMessage] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const bottomRef = useRef(null);

  // ---------------- LOAD THREAD ----------------
  const thread = useMemo(() => mockThreads.find((t) => t.id === id), [id]);
  const [messages, setMessages] = useState(thread?.messages || []);

  // ---------------- AUTO SCROLL ----------------
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping]);

  // ---------------- SEND MESSAGE ----------------
  const sendMessage = () => {
    if (!message.trim()) return;

    const userMsg = {
      id: Date.now(),
      user: "You",
      text: message,
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setMessage("");

    // BOT REPLY
    setBotTyping(true);
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        user: "AI Bot",
        text: "Thanks for your message! Keep exploring threads and discussing ideas 💡",
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setBotTyping(false);
    }, 1000);
  };

  if (!thread) return <p className="p-6 text-center text-pink-700">Loading...</p>;

  return (
    <div className="min-h-screen flex justify-center items-start pt-12 pb-6 bg-gradient-to-br from-pink-500 via-purple-700 to-indigo-900 text-white">
      <div className="flex flex-col w-full max-w-4xl">

        {/* THREAD HEADING */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-6 text-center"
        >
          {thread.title}
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
              key={msg.id}
              initial={{ x: msg.user === "You" ? 50 : -50, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`flex items-end ${msg.user === "You" ? "justify-end" : "justify-start"}`}
            >
              {msg.user !== "You" && (
                <FaRobot className="text-2xl mr-2 text-yellow-400 animate-bounce" />
              )}
              <div
                className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl shadow-lg 
                ${msg.user === "You"
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                    : "bg-white/80 text-gray-900"
                  }`}
              >
                <div className="text-sm font-semibold flex items-center gap-2">
                  {msg.user === "You" ? <FaUserCircle /> : <FaRobot />}
                  {msg.user}
                </div>
                <div className="mt-1">{msg.text}</div>
                <div className="text-xs opacity-70 mt-1">{msg.time}</div>
              </div>
            </motion.div>
          ))}

          {/* BOT TYPING INDICATOR */}
          {botTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 justify-start"
            >
              <FaRobot className="text-2xl text-yellow-400 animate-bounce" />
              <div className="px-4 py-2 rounded-xl bg-white/50 text-gray-900 animate-pulse">
                AI Bot is typing...
              </div>
            </motion.div>
          )}

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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-5 py-3 rounded-2xl border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendMessage}
            className="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 hover:from-indigo-600 hover:to-pink-700 transition shadow-lg"
          >
            Send 🚀
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
