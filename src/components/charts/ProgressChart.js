"use client";

import { motion } from "framer-motion";

export default function ProgressChart({ value }) {
  const chartHeight = 100; // height of the chart area
  const barWidth = 40;
  const barX = 80; // center the bar in SVG width 200

  return (
    <svg width="200" height="140">
      {/* Background */}
      <rect x="0" y="0" width="200" height="140" fill="#1e293b" rx="16" />

      {/* Animated bar */}
      <motion.rect
        x={barX}
        y={chartHeight - value + 20} // adjust for bottom padding
        width={barWidth}
        height={value}
        fill="#22c55e"
        rx="8"
        initial={{ height: 0, y: chartHeight + 20 }}
        animate={{ height: value, y: chartHeight - value + 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Percentage label */}
      <text
        x={barX + barWidth / 2}
        y={chartHeight - value + 15}
        fill="white"
        fontSize="16"
        fontWeight="bold"
        textAnchor="middle"
      >
        {value}%
      </text>

      {/* Label at bottom */}
      <text
        x={barX + barWidth / 2}
        y={chartHeight + 35}
        fill="white"
        fontSize="14"
        fontWeight="bold"
        textAnchor="middle"
      >
        Progress
      </text>
    </svg>
  );
}
