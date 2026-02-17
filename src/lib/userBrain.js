export function saveProgress(data) {
  localStorage.setItem("brain", JSON.stringify(data));
}

export function getProgress() {
  return JSON.parse(localStorage.getItem("brain")) || {
    score: 0,
    completedLessons: [],
    level: "weak",
  };
}
