export function generateQuiz(level) {
  if (level === "weak") {
    return [
      { q: "What is JS?", a: "Programming language" },
      { q: "Which keyword declares variable?", a: "let" },
    ];
  }

  if (level === "average") {
    return [
      { q: "Difference between let and var?", a: "Scope" },
      { q: "What is closure?", a: "Function with memory" },
    ];
  }

  return [
    { q: "Explain event loop", a: "Async handling" },
    { q: "What is currying?", a: "Function transformation" },
  ];
}
