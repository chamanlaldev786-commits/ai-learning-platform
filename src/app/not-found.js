"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const speak = (msg) => {
      const u = new SpeechSynthesisUtterance(msg);
      window.speechSynthesis.speak(u);
    };

    speak("Sorry, this page does not exist. Redirecting you home.");

    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-black">
      <h1 className="text-3xl">404 — Page Not Found</h1>
    </div>
  );
}
