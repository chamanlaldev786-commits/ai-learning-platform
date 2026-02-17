"use client";
import { useState } from "react";
import { aiTutor } from "@/lib/aiTutor";

export default function AITutorBox({ course }) {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");

  const ask = () => {
    setA(aiTutor(q, course));
  };

  return (
    <div className="bg-black/30 p-4 rounded-xl mt-6">
      <h3 className="text-white font-bold">AI Tutor</h3>

      <input
        className="w-full mt-2 p-2 rounded bg-white/10 text-white"
        placeholder="Ask anything..."
        onChange={(e) => setQ(e.target.value)}
      />

      <button
        onClick={ask}
        className="mt-3 bg-indigo-600 px-4 py-2 rounded text-white"
      >
        Ask AI
      </button>

      {a && <p className="mt-3 text-green-300">{a}</p>}
    </div>
  );
}
