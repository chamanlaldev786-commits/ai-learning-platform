"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">
          Something went wrong 😢
        </h1>

        <p className="mt-4 text-gray-400">
          Don’t worry, this happens sometimes.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 px-6 py-3 bg-indigo-600 rounded-xl"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
