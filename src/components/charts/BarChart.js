"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export default function BarChart({ data }) {
  const max = useMemo(() => {
    if (data.length > 0) {
      const maxVal = Math.max(...data.map((d) => d.value));
      return maxVal || 100;
    }
    return 100;
  }, [data]);

  return (
    <div className="flex gap-4 items-end h-56 p-4 bg-purple-50 rounded-xl shadow-lg overflow-x-auto">
      {data.map((d) => (
        <div key={d.label} className="flex flex-col items-center min-w-[60px]">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(d.value / max) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`w-8 rounded-t-xl ${d.value > max * 0.75
              ? "bg-green-400"
              : d.value > max * 0.5
                ? "bg-yellow-400"
                : "bg-purple-500"
              }`}
          />
          <span className="text-purple-700 mt-2 text-sm text-center break-words">
            {d.label}
          </span>
          <span className="text-purple-800 font-semibold mt-1 text-sm">
            {d.value}
          </span>
        </div>
      ))}
    </div>
  );
}
