"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Typewriter({ text, speed = 50, color = "text-purple-700" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`font-bold text-2xl md:text-3xl ${color} flex items-center`}>
      {displayed.split("").map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: idx * (speed / 500) }}
        >
          {char}
        </motion.span>
      ))}

      {/* Blinking Cursor */}
      <span className={`${color} ml-1 w-1 h-8 bg-current animate-pulse inline-block`}></span>
    </span>
  );
}
