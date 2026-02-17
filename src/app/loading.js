"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full"
      />
    </div>
  );
}
