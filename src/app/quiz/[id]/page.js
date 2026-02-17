"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";

const quizData = {
  javascript: [
    {
      q: "Which keyword declares a variable?",
      options: ["var", "loop", "print"],
      answer: "var",
    },
    {
      q: "Which loop runs at least once?",
      options: ["for", "while", "do-while"],
      answer: "do-while",
    },
  ],
};

export default function QuizPage() {
  const { id } = useParams();
  const router = useRouter();
  const questions = useMemo(() => quizData[id] || [], [id]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // 🔊 Voice feedback
  const speak = (msg) => {
    const u = new SpeechSynthesisUtterance(msg);
    u.lang = "en-US";
    u.rate = 1;
    u.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  // 🎙️ On quiz start
  useEffect(() => {
    if (questions.length) speak("Quiz started. Answer carefully.");
  }, [questions]);

  // ✅ Handle answer
  const answer = (opt) => {
    const correct = opt === questions[index].answer;
    if (correct) {
      setScore((prev) => prev + 1);
      speak("Correct answer!");
    } else {
      speak("Wrong answer.");
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
      speak(`Quiz finished! You scored ${correct ? score + 1 : score} out of ${questions.length}`);
      localStorage.setItem(`quiz-${id}`, correct ? score + 1 : score);
    }
  };

  if (!questions.length) return <p className="p-6 text-white">No quiz found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-pink-700 text-white flex items-center justify-center px-6">
      <div className="bg-white/10 p-10 rounded-3xl max-w-xl w-full backdrop-blur flex flex-col items-center">

        {/* Finished overlay */}
        {finished ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🎉 Quiz Completed!</h2>
            <p className="text-xl mb-6">
              You scored <span className="font-bold">{score}</span> out of {questions.length}
            </p>
            <button
              onClick={() => router.push("/quiz/result?score=" + score + "&total=" + questions.length)}
              className="bg-purple-500 px-6 py-3 rounded-xl hover:bg-purple-600 transition"
            >
              View Result
            </button>
          </div>
        ) : (
          <>
            {/* Question */}
            <h2 className="text-2xl font-bold mb-6">{questions[index].q}</h2>

            {/* Options */}
            <div className="space-y-4 w-full">
              {questions[index].options.map((o) => (
                <button
                  key={o}
                  onClick={() => answer(o)}
                  className="w-full py-3 rounded-xl bg-indigo-900 hover:bg-indigo-700 transition"
                >
                  {o}
                </button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6 w-full bg-white/20 h-4 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 transition-all"
                style={{ width: `${((index + 1) / questions.length) * 100}%` }}
              />
            </div>

            <p className="mt-2 text-white/70">
              Question {index + 1} of {questions.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
